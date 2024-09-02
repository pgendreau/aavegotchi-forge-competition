import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    "./graphql/forge/__generated__/": {
      schema: process.env.NEXT_PUBLIC_FORGE_SUBGRAPH,
      documents: ["./graphql/forge/queries/*.ts"],
      preset: "client",
    },
    "./graphql/forge/schema.graphql": {
      schema: process.env.NEXT_PUBLIC_FORGE_SUBGRAPH,
      plugins: ["schema-ast"],
      config: {
        IncludeDirectives: true,  
      },
    },
    "./graphql/aavegotchis/__generated__/": {
      schema: process.env.NEXT_PUBLIC_AAVEGOTCHI_SUBGRAPH,
      documents: ["./graphql/aavegotchis/queries/**/*.ts"],
      preset: "client",
    },
    "./graphql/aavegotchis/schema.graphql": {
      schema: process.env.NEXT_PUBLIC_AAVEGOTCHI_SUBGRAPH,
      plugins: ["schema-ast"],
      config: {
        IncludeDirectives: true,  
      },
    },
  },
};

export default config;
