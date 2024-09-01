import * as dotenv from "dotenv";
dotenv.config();
import { expect } from "chai";
import { ethers } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { DistributePrizes } from "../typechain-types";

import { forgeDiamondAbi } from "./abi/forge_diamond";
import { distributionData } from "./data/distribution";

const mintIds = [1, 2, 3, 4, 5, 6, 21, 7, 8, 9, 10, 11, 13, 14];
const mintAmounts = [100, 100, 100, 50, 50, 50, 50, 25, 25, 25, 10, 10, 5, 5];

describe("DistributePrizes", function () {
  // We define a fixture to reuse the same setup in every test.
  async function deployDistributePrizesFixture() {
    const urlAlchemyPolygon = process.env.URL_ALCHEMY_POLYGON;
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
    const forgeAdmin = await hre.ethers.getSigner(ForgeDiamondOwnerAddress);

    const forgeDiamond = await hre.ethers.getContractAt(forgeDiamondAbi, ForgeDiamondAddress);

    const [owner] = await ethers.getSigners();

    // fuel up forge admin account
    await network.provider.send("hardhat_setBalance", [
      ForgeDiamondOwnerAddress,
      "0x8AC7230489E80000", // 100 matic
    ]);

    // mint prizes to test account
    forgeDiamond.connect(forgeAdmin).adminMintBatch(owner.address, mintIds, mintAmounts);

    // deploy our contract
    const distributePrizesFactory = await ethers.getContractFactory("DistributePrizes");
    const distributePrizes = (await distributePrizesFactory.deploy()) as DistributePrizes;
    await distributePrizes.waitForDeployment();

    // approve contract to transfer prizes
    await forgeDiamond.setApprovalForAll(distributePrizes.target, true);

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

  it("Should have minted all tokens", async function () {
    const { forgeDiamond, owner } = await loadFixture(deployDistributePrizesFixture);
    for (let i = 0; i < mintIds.length; i++) {
      // check initial balances for each id are what we expect
      expect(await forgeDiamond.balanceOf(owner.address, mintIds[i])).to.equal(mintAmounts[i]);
    }
  });

  it("Should fail if not same number of recipients and amounts", async function () {
    const { forgeDiamond, distributePrizes, recipients } = await loadFixture(deployDistributePrizesFixture);
    const recipient = recipients[0];
    await expect(
      // only one recipient but two amounts
      distributePrizes.distribute(forgeDiamond.target, [recipient], [1], [[1], [1]], "0x"),
    ).to.be.revertedWith("Invalid input: recipients and amounts must have the sanme number of elements");
  });

  it("Should fail if not same number of ids and amounts", async function () {
    const { forgeDiamond, distributePrizes, recipients } = await loadFixture(deployDistributePrizesFixture);
    const recipient = recipients[0];
    // no amount specified for second id
    await expect(distributePrizes.distribute(forgeDiamond.target, [recipient], [1, 2], [[1]], "0x")).to.be.revertedWith(
      "Invalid input: the number of amounts does not match the number of ids",
    );
  });

  it("Should fail if contract is not approved", async function () {
    const { forgeDiamond, distributePrizes, recipients } = await loadFixture(deployDistributePrizesFixture);
    const recipient = recipients[0];
    // unapprove
    await forgeDiamond.setApprovalForAll(distributePrizes.target, false);
    await expect(distributePrizes.distribute(forgeDiamond.target, [recipient], [1], [[1]], "0x")).to.be.revertedWith(
      "Sender has not approved contract for distribution",
    );
  });

  it("Should fail if balance is insufficient for any token", async function () {
    const { forgeDiamond, distributePrizes, recipients } = await loadFixture(deployDistributePrizesFixture);
    const recipient = recipients[0];
    // send one too many
    await expect(distributePrizes.distribute(forgeDiamond.target, [recipient], [1], [[101]], "0x")).to.be.revertedWith(
      "Insufficient balance",
    );
  });

  // we need to batch transactions to avoid reaching the block limit
  it("Should be able to distribute all tokens in batch", async function () {
    const { forgeDiamond, distributePrizes, recipients, owner } = await loadFixture(deployDistributePrizesFixture);
    // 5 batches of 20 recipients each
    const indexes = [0, 20, 40, 60, 80];
    for (const idx of indexes) {
      // slice from idx up to not including idx+20 (ex: 0, 19)
      const recipientsSubset = recipients.slice(idx, idx + 20);
      const amountsSubset = distributionData.amounts.slice(idx, idx + 20);

      await distributePrizes.distribute(
        forgeDiamond.target,
        recipientsSubset,
        distributionData.ids,
        amountsSubset,
        "0x",
      );
      // check that balance of each recipient for each id after sending batch
      for (let i = 0; i < recipientsSubset.length; i++) {
        for (let j = 0; j < distributionData.ids.length; j++) {
          expect(await forgeDiamond.balanceOf(recipientsSubset[i], distributionData.ids[j])).to.equal(
            amountsSubset[i][j],
          );
        }
      }
    }
    // should have sent all that was minted at the end
    for (let i = 0; i < mintIds.length; i++) {
      expect(await forgeDiamond.balanceOf(owner.address, mintIds[i])).to.equal(0);
    }
  });

  // for debugging purpose, allow to select any recipients slice
  //it("Should be able to distribute tokens", async function () {
  //  const { forgeDiamond, distributePrizes, recipients, owner } = await loadFixture(deployDistributePrizesFixture);
  //  const recipientsSubset = recipients.slice(0, 5);
  //  const amountsSubset = distributionData.amounts.slice(0, 5);
  //
  //  console.log("recipients: ", recipientsSubset.length);
  //
  //  console.log(
  //    forgeDiamond.target,
  //    recipientsSubset,
  //    distributionData.ids,
  //    amountsSubset,
  //    "0x",
  //  );
  //  const tx = await distributePrizes.distribute(
  //    forgeDiamond.target,
  //    recipientsSubset,
  //    distributionData.ids,
  //    amountsSubset,
  //    "0x",
  //  );
  //  const receipt = await tx.wait();
  //  console.log(receipt.logs);
  //  for (let i = 0; i < recipientsSubset.length; i++) {
  //    for (let j = 0; j < distributionData.ids.length; j++) {
  //      console.log(
  //        recipientsSubset[i],
  //        distributionData.ids[j],
  //        amountsSubset[i][j],
  //        await forgeDiamond.balanceOf(recipientsSubset[i], distributionData.ids[j]),
  //      );
  //    }
  //  }
  //  for (let i = 0; i < mintIds.length; i++) {
  //    console.log(mintIds[i], mintAmounts[i], await forgeDiamond.balanceOf(owner.address, mintIds[i]));
  //  }
  //});
});
