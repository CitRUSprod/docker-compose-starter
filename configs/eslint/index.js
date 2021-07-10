module.exports = {
    extends: ["@citrus-linting", "@citrus-linting/eslint-config/typescript", "prettier"],
    overrides: [
        {
            files: "*.ts",
            parserOptions: {
                project: "./services/*/tsconfig.json"
            }
        }
    ]
}
