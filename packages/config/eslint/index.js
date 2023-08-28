const { configure, presets } = require('eslint-kit')

module.exports = ({ root, tsconfig = 'tsconfig.json', rules = {} }) => {
    return configure({
        root,
        presets: [
            presets.node(),
            presets.prettier({
                singleQuote: true,
                trailingComma: "none",
            }),
            presets.typescript({
                tsconfig, root
            }),
            presets.imports({
                sort: {
                    newline: true
                }
            }),
            presets.effector()
        ],

        extend: {
            root: true,
            ignorePatterns: ["!**/*", "dist", ".turbo"],
            plugins: ["prefer-arrow"],
            parserOptions: {
                parser: '@typescript-eslint/parser',
                extraFileExtensions: ['.vue'],
            },
            rules: {
                "react/react-in-jsx-scope": "off",
                "quotes": [2, "single", { "avoidEscape": true }],
                "@typescript-eslint/no-namespace": "off",
                "@typescript-eslint/member-delimiter-style": ["error",  {"multiline" : {"delimiter": "none"}}],
                "import/no-unresolved": "off",
                "@typescript-eslint/no-unnecessary-condition": "off",
                "import/extensions": "off",
                "@typescript-eslint/no-explicit-any": "warn",
                "dot-notation": "off",
                "prefer-arrow/prefer-arrow-functions": "error",
                ...rules
            }
        }
    })
}
