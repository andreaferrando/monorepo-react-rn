module.exports = {
    parser: 'babel-eslint',
    extends: ['airbnb'],
    rules: {
        'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
        'import/prefer-default-export': 'off',
        'implicit-arrow-linebreak': 'off',
        'no-console': 'off',
        'max-len': [
            'error',
            {
                code: 80,
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
