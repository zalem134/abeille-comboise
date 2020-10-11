module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': 'off',
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'vue/max-attributes-per-line': ['error', {
      singleline: 3, multiline: { max: 1, allowFirstLine: false },
    }],
    'vue/custom-event-name-casing': 'off',
    'no-return-assign': 'off',
    'vue/attribute-hyphenation': ['error', 'never'],
    'object-curly-newline': ['error', { consistent: true }],
  },
}
