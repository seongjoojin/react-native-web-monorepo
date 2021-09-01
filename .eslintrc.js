module.exports = {
	root: true,
	plugins: ['@typescript-eslint', 'prettier'],
	extends: ['@react-native-community', 'plugin:@typescript-eslint/recommended'],
	env: {
		node: true,
		browser: true,
	},
	parserOptions: {
		project: './tsconfig.json',
	},
	rules: {
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'import/prefer-default-export': 'off',
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'error',
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid',
				jsxBracketSameLine: true,
			},
		],
	},
};
