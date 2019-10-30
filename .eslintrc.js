module.exports = {
    parser: 'babel-eslint',
    extends: ['airbnb'],
    rules: {
        'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
        'import/prefer-default-export': 'off',
        'implicit-arrow-linebreak': 'off',
        'no-console': 'off',
        "react/prefer-stateless-function": [0, { "ignorePureComponents": true }],
        'max-len': [
            'error',
            {
                code: 120,
                ignorePattern: 'require'

            }
        ]
    },
    env: {
        node: true,
        jest: true,
        es6: true
    }
};
