module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		// 'eslint:recommended',
		'plugin:react/recommended'
	],
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': 'off',
		'quotes': [
			2,
			'single',
			{
				'avoidEscape': true,
				'allowTemplateLiterals': true
			}
		],
		'semi': [
			'error',
			'always'
		],
		'padded-blocks': 'off',
		'no-trailing-spaces': 'off',
		'max-len': [
			2,
			100,
			{
				'ignoreUrls': true,
				'ignorePattern': 'import|export'
			}
		],
		'space-before-blocks': [2],
		'keyword-spacing': [2],
		'no-whitespace-before-property': [2],
	}
};
