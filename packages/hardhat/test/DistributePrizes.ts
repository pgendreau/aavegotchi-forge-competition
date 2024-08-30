import * as dotenv from "dotenv";
dotenv.config();
import { expect } from "chai";
import { ethers } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { DistributePrizes } from "../typechain-types";

import { forgeDiamondAbi } from "./abi/forge_diamond";

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
          },
        },
      ],
    });

    await hre.network.provider.request({
      method: "hardhat_impersonateAccount",
      params: ["0x01F010a5e001fe9d6940758EA5e8c777885E351e"],
    });

    const forgeAdmin = await hre.ethers.getSigner(ForgeDiamondOwnerAddress);

    const forgeDiamond = await hre.ethers.getContractAt(forgeDiamondAbi, ForgeDiamondAddress);

    const [owner] = await ethers.getSigners();

    await network.provider.send("hardhat_setBalance", [
      ForgeDiamondOwnerAddress,
      "0x8AC7230489E80000", // 100 matic
    ]);

    forgeDiamond
      .connect(forgeAdmin)
      .adminMintBatch(
        owner.address,
        [1, 2, 3, 4, 5, 6, 21, 7, 8, 9, 10, 11, 13, 14],
        [100, 100, 100, 50, 50, 50, 50, 25, 25, 25, 10, 10, 5, 5],
      );

    const distributePrizesFactory = await ethers.getContractFactory("DistributePrizes");
    const distributePrizes = (await distributePrizesFactory.deploy()) as DistributePrizes;
    await distributePrizes.waitForDeployment();

    return { distributePrizes, forgeDiamond, owner };
  }

  it("Should have minted 100 of the first token id", async function () {
    const { forgeDiamond, owner } = await loadFixture(deployDistributePrizesFixture);
    expect(await forgeDiamond.balanceOf(owner.address, 1)).to.equal(100);
  });
});
