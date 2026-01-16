module.exports = {
	extends: ['stylelint-config-recommended-scss', 'stylelint-config-recess-order'],

	rules: {
		'value-keyword-case': 'lower',
		'no-duplicate-selectors': true,
		'scss/no-global-function-names': null, // TODO Phase 4: migrate lighten()/darken() to sass:color
		'scss/at-extend-no-missing-placeholder': null,
		'no-descending-specificity': null,
		'scss/at-rule-no-unknown': null, // Allow @use, @forward, @import
	},
	ignoreFiles: ['node_modules/**/*', 'dist/**/*', '.astro/**/*'],
};
