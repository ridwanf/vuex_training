module.exports = {
  extends: 'eslint-config-antife',

  rules: {
    'prefer-const': 1,
    'no-var': 1,
    'quote-props': 1,
    'indent': 1,
    'no-multi-spaces': 1,
    'camelcase': 1,
    'max-len': [1, {
      code: 150,
      ignoreUrls: true,
      ignoreComments: true,
      ignoreTemplateLiterals: true,
      ignoreStrings: true,
      ignoreRegExpLiterals: true,
    }],
   }
}
