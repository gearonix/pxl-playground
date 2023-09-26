const grnx = require('@grnx-utils/eslint')

module.exports = grnx({
  root: __dirname,
  tsconfig: 'tsconfig.root.json',
  monorepo: true
})