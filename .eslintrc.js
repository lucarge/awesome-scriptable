module.exports = {
  extends: ['airbnb-base', 'prettier'],
  globals: {
    config: false,
    Request: false,
    Safari: false,
    Speech: false,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
  }
}
