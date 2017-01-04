'use strict';

module.exports = {
  extends: 'eslint:recommended',
  rules: {
    // All the rules missing from eslint:recommended
    'accessor-pairs': 'error',
    'block-scoped-var': 'error',
    'brace-style': 'error',
    'camelcase': ['error', { 'properties': 'always' }],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'comma-style': ['error', 'last'],
    'consistent-this': ['error', 'self'],
    'curly': 'error',
    'dot-notation': 'error',
    'eol-last': 'error',
    'eqeqeq': 'error',
    'guard-for-in': 'error',
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
    'keyword-spacing': 'error',
    'max-nested-callbacks': ['error', 3],
    'new-cap': 'error',
    'new-parens': 'error',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-caller': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extra-bind': 'error',
    'no-floating-decimal': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': ['warn', { 'max': 2 }],
    'no-native-reassign': 'error',
    'no-nested-ternary': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-new': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error',
    'no-use-before-define': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-shorthand': 'error',
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'space-before-blocks': ['error', 'always'],
    'spaced-comment': ['error', 'always', { 'exceptions': ['eslint-disable', 'global', 'eslint', 'eslint-env'] }],
    'strict': ['error', 'safe'],
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'inside'],
    // Other rules that come from the old config
    'constructor-super': 'error',
    'func-style': ['off', 'declaration'],
    'generator-star-spacing': 'off',
    'generator-star': 'off',
    'handle-callback-err': 'off',
    'no-catch-shadow': 'off',
    'no-delete-var': 'error',
    'no-extend-native': 'off',
    'no-fallthrough': 'error',
    'no-mixed-requires': 'off',
    'no-multi-spaces': 'off',
    'no-new-require': 'off',
    'no-octal': 'error',
    'no-param-reassign': 'off',
    'no-path-concat': 'off',
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-redeclare': 'error',
    'no-restricted-modules': 'off',
    'no-sync': 'off',
    'no-this-before-super': 'error',
    'no-undef': 'error',
    'no-underscore-dangle': 'off',
    'no-unexpected-multiline': 'warn',
    'no-unused-vars': 'error',
    'prefer-const': 'off',
    // TODO we have the wrong config. see airbnb for inspiration 'sourceType': 'script',
  }
};
