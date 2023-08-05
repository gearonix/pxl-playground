const { configure, presets } = require('eslint-kit')

module.exports = configure({
  root: __dirname,
  presets: [
    presets.node(),
    presets.prettier({
      singleQuote: true,
      trailingComma: "none",
      endOfLine: "auto"
    }),
    presets.typescript(),
    presets.react(),
  ],
  extend: {
    root: true,
    ignorePatterns: ["**/*"],
    plugins: ["prefer-arrow"],
    // My custom config
    extends: ["gearonix"],
    rules: {

    }
  }
})
