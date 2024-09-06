import { forgeAbi } from "./abis/forge";
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

/**
 * @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *       address: "0x...",
 *       abi: [...],
 *     },
 *   },
 * } as const;
 */
const externalContracts = {
  137: {
    Forge: {
      address: process.env.NEXT_PUBLIC_FORGE_ADDRESS,
      abi: forgeAbi,
    },
  },
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
