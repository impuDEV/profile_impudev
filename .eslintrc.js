module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'airbnb',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:i18next/recommended',
		'prettier',
		'plugin:storybook/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'i18next',
		'react-hooks',
		'impudev-fsd',
		'unused-imports',
	],
	rules: {
		'linebreak-style': ['error', 'windows'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'no-tabs': [
			'error',
			{
				allowIndentationTabs: true,
			},
		],
		'no-undef': 'off',
		'no-param-reassign': 'off',
		'no-shadow': 'off',
		'no-unused-vars': 'off',
		'no-console': 'warn',
		'no-underscore-dangle': 'off',
		'react/require-default-props': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': [
			2,
			{
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		],
		'react/jsx-props-no-spreading': 'warn',
		'unused-imports/no-unused-imports': 'error',
		'react/display-name': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'react/no-array-index-key': 'off',
		'react/no-deprecated': 'off',
		'react/function-component-definition': 'off',
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'import/extensions': 'off',
		'import/no-extraneous-dependencies': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'i18next/no-literal-string': [
			'error',
			{
				markupOnly: true,
				ignoreAttribute: [
					'data-testid',
					'to',
					'target',
					'justify',
					'align',
					'direction',
					'gap',
					'role',
					'as',
					'border',
				],
			},
		],
		'max-len': [
			'error',
			{
				ignoreComments: true,
				code: 125,
			},
		],
		'jsx-a11y/no-static-element-interactions': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'object-curly-spacing': ['error', 'always'],
		'arrow-body-style': 'off',
		'impudev-fsd/path-checker': [
			'error',
			{
				alias: '@',
			},
		],
		'impudev-fsd/layer-imports': [
			'error',
			{
				alias: '@',
				ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
			},
		],
		'impudev-fsd/public-api-imports': [
			'error',
			{
				alias: '@',
				testFilesPatterns: [
					'**/*.test.*',
					'**/*.story.*',
					'**/StoreDecorator.tsx',
				],
			},
		],
		'react/jsx-max-props-per-line': [
			'error',
			{
				maximum: 3,
			},
		],
		'react/no-unstable-nested-components': 'warn',
	},
	globals: {
		__IS_DEV__: true,
		__API__: true,
		__PROJECT__: true,
	},
	overrides: [
		{
			files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
			rules: {
				'i18next/no-literal-string': 'off',
				'max-len': 'off',
			},
		},
	],
}
