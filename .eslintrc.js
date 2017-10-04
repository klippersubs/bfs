/**
 * @file General purpose BFS implementation. (ESLint config file.)
 * @author Alice Klipper <aliceklipper@yandex.com> (https://t.me/aliceklipper)
 * @license MIT
 * @copyright KlipperSubs, 2017
 * @flow
 */

module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    extends: ['eslint:recommended', 'google', 'plugin:flowtype/recommended', 'prettier', 'prettier/flowtype'],
    parserOptions: {
        ecmaVersion: 8,
        impliedStrict: true,
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
        sourceType: 'module',
    },
    plugins: ['flowtype', 'prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                useTabs: false,
                printWidth: 160,
                tabWidth: 4,
                singleQuote: true,
                trailingComma: 'all',
                bracketSpacing: true,
                parser: 'flow',
                semi: true,
            },
        ],
        'no-console': 'off',
        'require-jsdoc': 'off',
        'no-irregular-whitespace': 'off',
        'flowtype/no-types-missing-file-annotation': 'off',
    },
    overrides: [
        {
            files: ['./source/**/*.test.js'],
            env: {
                browser: true,
                commonjs: true,
                es6: true,
                node: true,
                jest: true,
            },
            globals: {
                test: true,
            },
        },
    ],
};
