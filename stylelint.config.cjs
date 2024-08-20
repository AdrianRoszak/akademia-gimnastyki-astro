module.exports = {
  extends: ['stylelint-config-recommended-scss', 'stylelint-config-recess-order'],

  rules: {
    'value-keyword-case': 'lower',
    'no-duplicate-selectors': true,
    'scss/no-global-function-names': null,
  },
  ignoreFiles: ['node_modules/**/*', 'dist/**/*'],
}
