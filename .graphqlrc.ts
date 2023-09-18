import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
	overwrite: true,
	schema: process.env.GRAPHQL_URL,
	documents: "src/graphql/*.graphql",
	ignoreNoDocuments: true,
	generates: {
		"src/gql/": {
			preset: "client",
			presetConfig: {
				fragmentMasking: false,
			},
			config: {
				enumsAsTypes: true,
				documentMode: "string",
				defaultScalarType: "unknown",
				skipTypename: true,
				useTypeImports: true,
			},
			plugins: [],
		},
	},
};

export default config;
