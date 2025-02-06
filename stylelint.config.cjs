module.exports = {
	extends: ['stylelint-config-recommended-scss', 'stylelint-config-recess-order'],

	rules: {
		'value-keyword-case': 'lower',
		'no-duplicate-selectors': true,
		'scss/no-global-function-names': null,
		'scss/at-extend-no-missing-placeholder': null,
		'no-descending-specificity': null,
	},
	ignoreFiles: ['node_modules/**/*', 'dist/**/*'],
};
