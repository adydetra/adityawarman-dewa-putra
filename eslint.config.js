import antfu from '@antfu/eslint-config';
import format from 'eslint-plugin-format';

export default antfu({
  stylistic: {
    semi: true,
  },
  formatters: {
    css: true,
    html: true,
    markdown: 'prettier',
  },
  files: ['**/*.css'],
  languageOptions: {
    parser: format.parserPlain,
  },
  plugins: {
    format,
  },
  rules: {
    'format/prettier': ['error', { parser: 'css', tabWidth: 2 }],
  },
  files: ['**/*.toml'],
  languageOptions: {
    parser: format.parserPlain,
  },
  plugins: {
    format,
  },
  rules: {
    'format/dprint': ['error', { language: 'toml', languageOptions: { indentWidth: 2 } }],
  },
});
