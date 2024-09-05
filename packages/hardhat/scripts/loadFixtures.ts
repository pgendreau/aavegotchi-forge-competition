import * as dotenv from "dotenv";
dotenv.config();
import { expect } from "chai";
import { ethers, network } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { DistributePrizes } from "../typechain-types";

import { forgeDiamondAbi } from "../test/abi/forge_diamond";
import { distributionData } from "../test/data/distribution";
import { Address } from "hardhat-deploy/types";

// initial ids/amounts to mint to test the distribution
const mintIds = [1, 2, 3, 4, 5, 6, 21, 7, 8, 9, 10, 11, 13, 14];
const mintAmounts = [100, 100, 100, 50, 50, 50, 50, 25, 25, 25, 10, 10, 5, 5];

async function main() {
  const urlAlchemyPolygon = process.env.URL_ALCHEMY_POLYGON;
  console.log("urlAlchemyPolygon: ", urlAlchemyPolygon);
  const ForgeDiamondAddress = "0x4fDfc1B53Fd1D80d969C984ba7a8CE4c7bAaD442";
  const ForgeDiamondOwnerAddress = "0x01F010a5e001fe9d6940758EA5e8c777885E351e";

  // reset fork to know state
  await network.provider.request({
    method: "hardhat_reset",
    params: [
      {
        forking: {
          jsonRpcUrl: urlAlchemyPolygon,
          blockNumber: 61072268,
          timeout: 3600000,
        },
      },
    ],
  });

  // get a signer for forge admin
  await hre.network.provider.request({
    method: "hardhat_impersonateAccount",
    params: ["0x01F010a5e001fe9d6940758EA5e8c777885E351e"],
  });
  console.log("Impersonated account 0x01F010a5e001fe9d6940758EA5e8c777885E351e");
  const forgeAdmin = await hre.ethers.getSigner(ForgeDiamondOwnerAddress);

  const forgeDiamond = await hre.ethers.getContractAt(forgeDiamondAbi, ForgeDiamondAddress);

  const [owner] = await ethers.getSigners();

  // fuel up forge admin account
  await network.provider.send("hardhat_setBalance", [
    ForgeDiamondOwnerAddress,
    "0x8AC7230489E80000", // 100 matic
  ]);

  console.log("fueled up forge admin account");

  // mint prizes to test account
  forgeDiamond.connect(forgeAdmin).adminMintBatch(owner.address, mintIds, mintAmounts);

  console.log("minted prizes to test account");

  // deploy our contract
  const distributePrizesFactory = await ethers.getContractFactory("DistributePrizes");

  console.log("preparing deployment of distribute prizes contract");
  const distributePrizes = (await distributePrizesFactory.deploy()) as DistributePrizes;
  console.log("started deployment of distribute prizes contract");
  await distributePrizes.waitForDeployment();
  console.log("finished deployment of distribute prizes contract");

  // approve contract to transfer prizes
  await forgeDiamond.setApprovalForAll(distributePrizes.target, true);

  console.log("approved distribute prizes contract");

  // return a list of random addresses
  const randomRecipients = (amount: number): Address[] => {
    const recipients: Address[] = [];
    for (let i = 0; i < amount; i++) {
      recipients.push(ethers.Wallet.createRandom().address);
    }
    return recipients;
  };

  // generate list of recipients
  const recipients = randomRecipients(100);

  return { distributePrizes, forgeDiamond, owner, recipients };
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
