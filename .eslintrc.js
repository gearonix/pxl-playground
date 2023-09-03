const { configure, presets } = require('eslint-kit')

module.exports = configure({
  mode: 'only-errors',
  root: __dirname,
  presets: [
    presets.node(),
    presets.prettier({
      singleQuote: true,
      trailingComma: 'none'
    }),
    presets.typescript({
      tsconfig: 'tsconfig.root.json',
      root: './'
    }),
    presets.imports({
      sort: {
        newline: true
      }
    }),
  ],
  extend: {
    root: true,
    ignorePatterns: ['**/*'],
    plugins: ['prefer-arrow'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      quotes: [2, 'single', { avoidEscape: true }],
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/member-delimiter-style': [
        'error',
        { multiline: { delimiter: 'none' } }
      ],
      'import/no-unresolved': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'off',
      'import/extensions': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'dot-notation': 'off',
      'prefer-arrow/prefer-arrow-functions': 'error'
    }
  }
})
