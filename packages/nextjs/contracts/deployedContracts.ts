/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  137: {
    DistributePrizes: {
      address: "0xb8e907d1c0DA05a90CC21594C255C3a7Bf8b8154",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "contract IERC1155",
              name: "token",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "recipient",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256[]",
              name: "ids",
              type: "uint256[]",
            },
            {
              indexed: false,
              internalType: "uint256[]",
              name: "amounts",
              type: "uint256[]",
            },
          ],
          name: "TokensDistributed",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "contract IERC1155",
              name: "token",
              type: "address",
            },
            {
              internalType: "address[]",
              name: "recipients",
              type: "address[]",
            },
            {
              internalType: "uint256[]",
              name: "ids",
              type: "uint256[]",
            },
            {
              internalType: "uint256[][]",
              name: "amounts",
              type: "uint256[][]",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "distribute",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
  },
  31337: {
    DistributePrizes: {
      address: "0x0FAa08A6f25B72b9394145e080cE407f570203a4",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "contract IERC1155",
              name: "token",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "recipient",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256[]",
              name: "ids",
              type: "uint256[]",
            },
            {
              indexed: false,
              internalType: "uint256[]",
              name: "amounts",
              type: "uint256[]",
            },
          ],
          name: "TokensDistributed",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "contract IERC1155",
              name: "token",
              type: "address",
            },
            {
              internalType: "address[]",
              name: "recipients",
              type: "address[]",
            },
            {
              internalType: "uint256[]",
              name: "ids",
              type: "uint256[]",
            },
            {
              internalType: "uint256[][]",
              name: "amounts",
              type: "uint256[][]",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "distribute",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
