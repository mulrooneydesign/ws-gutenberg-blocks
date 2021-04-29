module.exports = {
    env: {
        browser: true,
        amd: true,
        node: true,
        es2021: true
    },
    extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
    globals: {
        wp: "readonly",
        jquery: "readonly"
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: "module"
    },
    plugins: ["@wordpress", "react", "react-hooks"],
    rules: {
        "@wordpress/no-unused-vars-before-return": [
            "error",
            {
                excludePattern: "^use"
            }
        ],
        "react/display-name": "off",
        "react/jsx-curly-spacing": [
            "error",
            {
                when: "always",
                children: true
            }
        ],
        "react/jsx-equals-spacing": "error",
        "react/jsx-indent": "off",
        "react/jsx-key": "error",
        "react/jsx-tag-spacing": "error",
        "react/jsx-indent-props": "off",
        "react/no-children-prop": "off",
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "react-hooks/rules-of-hooks": "error",
        "no-console": "warn"
    }
};
