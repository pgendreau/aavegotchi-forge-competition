export const forgeDiamondAbi = [
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "enum IDiamondCut.FacetCutAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        indexed: false,
        internalType: "struct IDiamondCut.FacetCut[]",
        name: "_diamondCut",
        type: "tuple[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_init",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "DiamondCut",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "enum IDiamondCut.FacetCutAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        internalType: "struct IDiamondCut.FacetCut[]",
        name: "_diamondCut",
        type: "tuple[]",
      },
      {
        internalType: "address",
        name: "_init",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "diamondCut",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_functionSelector",
        type: "bytes4",
      },
    ],
    name: "facetAddress",
    outputs: [
      {
        internalType: "address",
        name: "facetAddress_",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "facetAddresses",
    outputs: [
      {
        internalType: "address[]",
        name: "facetAddresses_",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_facet",
        type: "address",
      },
    ],
    name: "facetFunctionSelectors",
    outputs: [
      {
        internalType: "bytes4[]",
        name: "facetFunctionSelectors_",
        type: "bytes4[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "facets",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        internalType: "struct IDiamondLoupe.Facet[]",
        name: "facets_",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "gotchiId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint40",
        name: "readyBlock",
        type: "uint40",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "queueId",
        type: "uint256",
      },
    ],
    name: "AddedToQueue",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gotchiId",
        type: "uint256",
      },
    ],
    name: "ForgeQueueClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "queueId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "gotchiId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint40",
        name: "_blocksReduced",
        type: "uint40",
      },
    ],
    name: "ForgeTimeReduced",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gotchiId",
        type: "uint256",
      },
    ],
    name: "ItemForged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gotchiId",
        type: "uint256",
      },
    ],
    name: "ItemSmelted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "gotchiId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint40",
        name: "reducedBlocks",
        type: "uint40",
      },
    ],
    name: "QueueTimeReduced",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
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
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "adminMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "adminMintBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "gotchiIds",
        type: "uint256[]",
      },
    ],
    name: "claimForgeQueueItems",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "owners",
        type: "address[]",
      },
    ],
    name: "fixInvalidTokenIds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gotchiId",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "rsm",
        type: "uint8",
      },
    ],
    name: "forgeTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_itemIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_gotchiIds",
        type: "uint256[]",
      },
      {
        internalType: "uint40[]",
        name: "_gltr",
        type: "uint40[]",
      },
    ],
    name: "forgeWearables",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "geodeRsmFromTokenId",
    outputs: [
      {
        internalType: "uint8",
        name: "rarityScoreModifier",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "rarityScoreModifier",
        type: "uint8",
      },
    ],
    name: "geodeTokenIdFromRsm",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gotchiId",
        type: "uint256",
      },
    ],
    name: "getAavegotchiSmithingLevel",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gotchiId",
        type: "uint256",
      },
    ],
    name: "getAavegotchiSmithingSkillPts",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "rarityScoreModifier",
        type: "uint8",
      },
      {
        internalType: "bool[16]",
        name: "slotPositions",
        type: "bool[16]",
      },
    ],
    name: "getCoreTokenId",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getForgeQueue",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "itemId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gotchiId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint40",
            name: "readyBlock",
            type: "uint40",
          },
          {
            internalType: "bool",
            name: "claimed",
            type: "bool",
          },
        ],
        internalType: "struct ForgeQueueItem[]",
        name: "queue",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gotchiId",
        type: "uint256",
      },
    ],
    name: "getForgeQueueItem",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "itemId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gotchiId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint40",
            name: "readyBlock",
            type: "uint40",
          },
          {
            internalType: "bool",
            name: "claimed",
            type: "bool",
          },
        ],
        internalType: "struct ForgeQueueItem",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "getForgeQueueItemsByOwner",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "itemId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gotchiId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint40",
            name: "readyBlock",
            type: "uint40",
          },
          {
            internalType: "bool",
            name: "claimed",
            type: "bool",
          },
        ],
        internalType: "struct ForgeQueueItem[]",
        name: "output",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "rsm",
        type: "uint8",
      },
    ],
    name: "getRsmIndex",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gotchiId",
        type: "uint256",
      },
    ],
    name: "getSmithingLevelMultiplierBips",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
    ],
    name: "isForgeable",
    outputs: [
      {
        internalType: "bool",
        name: "available",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gotchiId",
        type: "uint256",
      },
    ],
    name: "isGotchiForging",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "mintEssence",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_gotchiIds",
        type: "uint256[]",
      },
      {
        internalType: "uint40[]",
        name: "_amounts",
        type: "uint40[]",
      },
    ],
    name: "reduceQueueTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_itemIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_gotchiIds",
        type: "uint256[]",
      },
    ],
    name: "smeltWearables",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [],
    name: "ContractPaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "ContractUnpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "SetAavegotchiDaoAddress",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "SetAavegotchiDiamondAddress",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "bips",
        type: "uint256",
      },
    ],
    name: "SetAlloyBurnFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "bips",
        type: "uint256",
      },
    ],
    name: "SetAlloyDaoFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "common",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "uncommon",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rare",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "legendary",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mythical",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "godlike",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct RarityValueIO",
        name: "newCosts",
        type: "tuple",
      },
    ],
    name: "SetForgeAlloyCost",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "common",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "uncommon",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rare",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "legendary",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mythical",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "godlike",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct RarityValueIO",
        name: "newCosts",
        type: "tuple",
      },
    ],
    name: "SetForgeEssenceCost",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "common",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "uncommon",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rare",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "legendary",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mythical",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "godlike",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct RarityValueIO",
        name: "newCosts",
        type: "tuple",
      },
    ],
    name: "SetForgeTimeCostInBlocks",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "quantities",
        type: "uint256[]",
      },
    ],
    name: "SetGeodePrizes",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "common",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "uncommon",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "rare",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "legendary",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "mythical",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "godlike",
                type: "uint256",
              },
            ],
            internalType: "struct RarityValueIO",
            name: "common",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "common",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "uncommon",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "rare",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "legendary",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "mythical",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "godlike",
                type: "uint256",
              },
            ],
            internalType: "struct RarityValueIO",
            name: "uncommon",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "common",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "uncommon",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "rare",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "legendary",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "mythical",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "godlike",
                type: "uint256",
              },
            ],
            internalType: "struct RarityValueIO",
            name: "rare",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "common",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "uncommon",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "rare",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "legendary",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "mythical",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "godlike",
                type: "uint256",
              },
            ],
            internalType: "struct RarityValueIO",
            name: "legendary",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "common",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "uncommon",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "rare",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "legendary",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "mythical",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "godlike",
                type: "uint256",
              },
            ],
            internalType: "struct RarityValueIO",
            name: "mythical",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "common",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "uncommon",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "rare",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "legendary",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "mythical",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "godlike",
                type: "uint256",
              },
            ],
            internalType: "struct RarityValueIO",
            name: "godlike",
            type: "tuple",
          },
        ],
        indexed: false,
        internalType: "struct MultiTierGeodeChanceIO",
        name: "newChances",
        type: "tuple",
      },
    ],
    name: "SetGeodeWinChance",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "SetGltrAddress",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "supplyPerTokenId",
        type: "uint256[]",
      },
    ],
    name: "SetMaxSupplyPerToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "quantities",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint8[]",
        name: "rarities",
        type: "uint8[]",
      },
    ],
    name: "SetMultiTierGeodePrizes",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "common",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "uncommon",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rare",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "legendary",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mythical",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "godlike",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct RarityValueIO",
        name: "newPoints",
        type: "tuple",
      },
    ],
    name: "SetSkillPointsEarnedFromForge",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldBips",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBips",
        type: "uint256",
      },
    ],
    name: "SetSmeltingSkillPointReductionFactorBips",
    type: "event",
  },
  {
    inputs: [],
    name: "getAlloyBurnFeeInBips",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAlloyDaoFeeInBips",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getGeodePrizesRemaining",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "geodeRsm",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "prizeRsm",
        type: "uint8",
      },
    ],
    name: "getGeodeWinChance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pauseContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "daoAddress",
        type: "address",
      },
    ],
    name: "setAavegotchiDaoAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setAavegotchiDiamondAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "alloyBurnFeeInBips",
        type: "uint256",
      },
    ],
    name: "setAlloyBurnFeeInBips",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "alloyDaoFeeInBips",
        type: "uint256",
      },
    ],
    name: "setAlloyDaoFeeInBips",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "common",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "uncommon",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rare",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "legendary",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mythical",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "godlike",
            type: "uint256",
          },
        ],
        internalType: "struct RarityValueIO",
        name: "costs",
        type: "tuple",
      },
    ],
    name: "setForgeAlloyCost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "common",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "uncommon",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rare",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "legendary",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mythical",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "godlike",
            type: "uint256",
          },
        ],
        internalType: "struct RarityValueIO",
        name: "costs",
        type: "tuple",
      },
    ],
    name: "setForgeEssenceCost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "common",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "uncommon",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rare",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "legendary",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mythical",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "godlike",
            type: "uint256",
          },
        ],
        internalType: "struct RarityValueIO",
        name: "costs",
        type: "tuple",
      },
    ],
    name: "setForgeTimeCostInBlocks",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "uint256",
                name: "common",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "uncommon",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "rare",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "legendary",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "mythical",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "godlike",
                type: "uint256",
              },
            ],
            internalType: "struct RarityValueIO",
            name: "common",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "common",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "uncommon",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "rare",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "legendary",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "mythical",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "godlike",
                type: "uint256",
              },
            ],
            internalType: "struct RarityValueIO",
            name: "uncommon",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "common",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "uncommon",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "rare",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "legendary",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "mythical",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "godlike",
                type: "uint256",
              },
            ],
            internalType: "struct RarityValueIO",
            name: "rare",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "common",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "uncommon",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "rare",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "legendary",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "mythical",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "godlike",
                type: "uint256",
              },
            ],
            internalType: "struct RarityValueIO",
            name: "legendary",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "common",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "uncommon",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "rare",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "legendary",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "mythical",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "godlike",
                type: "uint256",
              },
            ],
            internalType: "struct RarityValueIO",
            name: "mythical",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "common",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "uncommon",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "rare",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "legendary",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "mythical",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "godlike",
                type: "uint256",
              },
            ],
            internalType: "struct RarityValueIO",
            name: "godlike",
            type: "tuple",
          },
        ],
        internalType: "struct MultiTierGeodeChanceIO",
        name: "chances",
        type: "tuple",
      },
    ],
    name: "setGeodeMultiTierWinChanceBips",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "quantities",
        type: "uint256[]",
      },
    ],
    name: "setGeodePrizes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "common",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "uncommon",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rare",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "legendary",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mythical",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "godlike",
            type: "uint256",
          },
        ],
        internalType: "struct RarityValueIO",
        name: "chances",
        type: "tuple",
      },
    ],
    name: "setGeodeWinChanceBips",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "gltr",
        type: "address",
      },
    ],
    name: "setGltrAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "quantities",
        type: "uint256[]",
      },
      {
        internalType: "uint8[]",
        name: "rarities",
        type: "uint8[]",
      },
    ],
    name: "setMultiTierGeodePrizes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "common",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "uncommon",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rare",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "legendary",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "mythical",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "godlike",
            type: "uint256",
          },
        ],
        internalType: "struct RarityValueIO",
        name: "points",
        type: "tuple",
      },
    ],
    name: "setSkillPointsEarnedFromForge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "bips",
        type: "uint256",
      },
    ],
    name: "setSmeltingSkillPointReductionFactorBips",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpauseContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
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
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOfOwner",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
        ],
        internalType: "struct ItemBalancesIO[]",
        name: "output_",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_value",
        type: "string",
      },
    ],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "geodeTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "GeodeEmpty",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "geodeTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "GeodeRefunded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "geodeTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "GeodeWin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "randomNumber",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "VrfResponse",
    type: "event",
  },
  {
    inputs: [],
    name: "areGeodePrizesAvailable",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newFee",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_keyHash",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_vrfCoordinator",
        type: "address",
      },
      {
        internalType: "address",
        name: "_link",
        type: "address",
      },
    ],
    name: "changeVrf",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimWinnings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "rsm",
        type: "uint8",
      },
    ],
    name: "getAvailablePrizesForRarity",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "geodeRsm",
        type: "uint8",
      },
    ],
    name: "getCurrentPrizeProbabilityForGeode",
    outputs: [
      {
        internalType: "uint256[6]",
        name: "",
        type: "uint256[6]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMaxVrf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getRequestInfo",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "requestId",
            type: "bytes32",
          },
          {
            internalType: "enum VrfStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "randomNumber",
            type: "uint256",
          },
          {
            internalType: "uint256[]",
            name: "geodeTokenIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "amountPerToken",
            type: "uint256[]",
          },
        ],
        internalType: "struct VrfRequestInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
    ],
    name: "getRequestInfoByRequestId",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "requestId",
            type: "bytes32",
          },
          {
            internalType: "enum VrfStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "randomNumber",
            type: "uint256",
          },
          {
            internalType: "uint256[]",
            name: "geodeTokenIds",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "amountPerToken",
            type: "uint256[]",
          },
        ],
        internalType: "struct VrfRequestInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[6]",
        name: "winChanceByRarity",
        type: "uint256[6]",
      },
    ],
    name: "getWinRanges",
    outputs: [
      {
        internalType: "uint256[]",
        name: "probabilityRanges",
        type: "uint256[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "keyHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "link",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "linkBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "linkBalance_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numTotalPrizesLeft",
    outputs: [
      {
        internalType: "uint256",
        name: "total",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "numTotalPrizesLeftByRarity",
    outputs: [
      {
        internalType: "uint256[6]",
        name: "total",
        type: "uint256[6]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_geodeTokenIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_amountPerToken",
        type: "uint256[]",
      },
    ],
    name: "openGeodes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_requestId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_randomNumber",
        type: "uint256",
      },
    ],
    name: "rawFulfillRandomness",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "removeLinkTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vrfCoordinator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
