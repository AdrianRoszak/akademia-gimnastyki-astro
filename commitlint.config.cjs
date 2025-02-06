module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [
			2,
			'always',
			[
				'wip',
				'feat',
				'ui',
				'fix',
				'docs',
				'chore',
				'style',
				'refactor',
				'ci',
				'test',
				'revert',
				'perf',
			],
		],
	},
};
