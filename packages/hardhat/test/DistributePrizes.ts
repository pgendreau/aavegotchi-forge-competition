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

    await hre.network.provider.request({
      method: "hardhat_impersonateAccount",
      params: ["0x01F010a5e001fe9d6940758EA5e8c777885E351e"],
    });

    const randomRecipients = (amount: number): Address[] => {
      const recipients: Address[] = [];
      for (let i = 0; i < amount; i++) {
        recipients.push(ethers.Wallet.createRandom().address);
      }
      return recipients;
    };

    const forgeAdmin = await hre.ethers.getSigner(ForgeDiamondOwnerAddress);

    const forgeDiamond = await hre.ethers.getContractAt(forgeDiamondAbi, ForgeDiamondAddress);

    const [owner] = await ethers.getSigners();

    await network.provider.send("hardhat_setBalance", [
      ForgeDiamondOwnerAddress,
      "0x8AC7230489E80000", // 100 matic
    ]);

    forgeDiamond.connect(forgeAdmin).adminMintBatch(owner.address, mintIds, mintAmounts);

    const distributePrizesFactory = await ethers.getContractFactory("DistributePrizes");
    const distributePrizes = (await distributePrizesFactory.deploy()) as DistributePrizes;
    await distributePrizes.waitForDeployment();

    await forgeDiamond.setApprovalForAll(distributePrizes.target, true);

    const recipients = randomRecipients(100);

    return { distributePrizes, forgeDiamond, owner, recipients };
  }

  it("Should have minted all tokens", async function () {
    const { forgeDiamond, owner } = await loadFixture(deployDistributePrizesFixture);
    for (let i = 0; i < mintIds.length; i++) {
      expect(await forgeDiamond.balanceOf(owner.address, mintIds[i])).to.equal(mintAmounts[i]);
    }
  });

  it("Should fail if not same number of recipients and amounts", async function () {
    const { forgeDiamond, distributePrizes, recipients } = await loadFixture(deployDistributePrizesFixture);
    const recipient = recipients[0];
    await expect(
      distributePrizes.distribute(forgeDiamond.target, [recipient], [1], [[1], [1]], "0x"),
    ).to.be.revertedWith("Invalid input: recipients and amounts must have the sanme number of elements");
  });

  it("Should fail if not same number of ids and amounts", async function () {
    const { forgeDiamond, distributePrizes, recipients } = await loadFixture(deployDistributePrizesFixture);
    const recipient = recipients[0];
    await expect(distributePrizes.distribute(forgeDiamond.target, [recipient], [1, 2], [[1]], "0x")).to.be.revertedWith(
      "Invalid input: the number of amounts does not match the number of ids",
    );
  });

  it("Should fail if contract is not approved", async function () {
    const { forgeDiamond, distributePrizes, recipients } = await loadFixture(deployDistributePrizesFixture);
    const recipient = recipients[0];
    await forgeDiamond.setApprovalForAll(distributePrizes.target, false);
    await expect(distributePrizes.distribute(forgeDiamond.target, [recipient], [1], [[1]], "0x")).to.be.revertedWith(
      "Sender has not approved contract for distribution",
    );
  });

  it("Should fail if balance is insufficient for any token", async function () {
    const { forgeDiamond, distributePrizes, recipients } = await loadFixture(deployDistributePrizesFixture);
    const recipient = recipients[0];
    await expect(distributePrizes.distribute(forgeDiamond.target, [recipient], [1], [[101]], "0x")).to.be.revertedWith(
      "Insufficient balance",
    );
  });

  //it("Should distribute all tokens", async function () {
  //  const { forgeDiamond, distributePrizes, recipients } = await loadFixture(deployDistributePrizesFixture);
  //
  //  //console.log(
  //  //  forgeDiamond.target,
  //  //  recipientsSubset,
  //  //  distributionData.ids,
  //  //  amountsSubset,
  //  //  "0x",
  //  //);
  //  //const tx = await distributePrizes.distribute(
  //  await distributePrizes.distribute(
  //    forgeDiamond.target,
  //    recipients,
  //    distributionData.ids,
  //    distributionData.amounts,
  //    "0x",
  //  );
  //  //const receipt = await tx.wait();
  //  //console.log(receipt.logs);
  //  for (let i = 0; i < recipients.length; i++) {
  //    for (let j = 0; j < distributionData.ids.length; j++) {
  //      console.log(
  //        recipients[i],
  //        distributionData.ids[j],
  //        distributionData.amounts[i][j],
  //        await forgeDiamond.balanceOf(recipients[i], distributionData.ids[j])
  //      );
  //      expect(await forgeDiamond.balanceOf(recipients[i], distributionData.ids[j])).to.equal(distributionData.amounts[i][j]);
  //    }
  //  }
  //});

  it("Should be able to distribute all tokens in batch of 20", async function () {
    const { forgeDiamond, distributePrizes, recipients, owner } = await loadFixture(deployDistributePrizesFixture);
    const indexes = [0, 20, 40, 60, 80];
    for (const idx of indexes) {
      const recipientsSubset = recipients.slice(idx, idx + 19);
      const amountsSubset = distributionData.amounts.slice(idx, idx + 19);

      //console.log(
      //  forgeDiamond.target,
      //  recipientsSubset,
      //  distributionData.ids,
      //  amountsSubset,
      //  "0x",
      //);
      //const tx = await distributePrizes.distribute(
      await distributePrizes.distribute(
        forgeDiamond.target,
        recipientsSubset,
        distributionData.ids,
        amountsSubset,
        "0x",
      );
      //const receipt = await tx.wait();
      //console.log(receipt.logs);
      for (let i = 0; i < recipientsSubset.length; i++) {
        for (let j = 0; j < distributionData.ids.length; j++) {
          //console.log(
          //  recipientsSubset[i],
          //  distributionData.ids[j],
          //  amountsSubset[i][j],
          //  await forgeDiamond.balanceOf(recipientsSubset[i], distributionData.ids[j]),
          //);
          expect(await forgeDiamond.balanceOf(recipientsSubset[i], distributionData.ids[j])).to.equal(
            amountsSubset[i][j],
          );
        }
      }
    }
    // should have sent all that was minted
    for (let i = 0; i < mintIds.length; i++) {
      console.log(mintIds[i], mintAmounts[i], await forgeDiamond.balanceOf(owner.address, mintIds[i]));
      expect(await forgeDiamond.balanceOf(owner.address, mintIds[i])).to.equal(0);
    }
  });
});
