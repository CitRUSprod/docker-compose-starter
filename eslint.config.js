import baseConfig from "@citrus-linting/eslint-config"
import typescriptConfig from "@citrus-linting/eslint-config/typescript"
import anyParser from "any-eslint-parser"
import prettierConfig from "eslint-config-prettier"
import prettier from "eslint-plugin-prettier"
import globals from "globals"

typescriptConfig[0].languageOptions.parserOptions.project = [
    "./tsconfig.json",
    "./{apps,packages}/*/tsconfig.json"
]

const prettierRules = {
    "prettier/prettier": 2,
    "arrow-body-style": 0,
    "prefer-arrow-callback": 0
}

/** @type {import("eslint").Linter.Config[]} */
const config = [
    {
        ignores: ["pnpm-lock.yaml", "**/.turbo", "**/dist", "storage"]
    },
    {
        plugins: { prettier }
    },
    {
        files: ["**/*.?([cm])js", "**/*.ts"],
        rules: {
            ...prettierRules
        }
    },
    ...baseConfig,
    ...typescriptConfig,
    {
        files: ["**/*.test.ts"],
        languageOptions: {
            globals: {
                ...globals.vitest
            }
        }
    },
    {
        files: ["**/*.json"],
        languageOptions: {
            parser: anyParser
        },
        rules: {
            "prettier/prettier": 2
        }
    },
    {
        files: ["**/*.y?(a)ml"],
        languageOptions: {
            parser: anyParser
        },
        rules: {
            "prettier/prettier": 2
        }
    },
    {
        files: ["**/*.md"],
        languageOptions: {
            parser: anyParser
        },
        rules: {
            "prettier/prettier": [2, { parser: "markdown" }]
        }
    },
    {
        files: ["**/*.html"],
        languageOptions: {
            parser: anyParser
        },
        rules: {
            "prettier/prettier": [2, { parser: "html" }]
        }
    },
    prettierConfig
]

export default config
