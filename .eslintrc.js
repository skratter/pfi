module.exports = {
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: [
    'vue'
  ],
  extends: [
    'plugin:vue/recommended',
    'standard'
  ],
  "rules": {
    // enable additional rules
    "indent": ["error", 4],
    "vue/max-attributes-per-line": ["error", {
      "singleline": 4,
      "multiline": {
        "max": 4,
        "allowFirstLine": true
      }
    }],
    "vue/html-indent": ["error", 4, {
      "attribute": 1,
      "baseIndent": 1,
      "closeBracket": 0,
      "alignAttributesVertically": true,
      "ignores": []
    }],
    // 'vue/singleline-html-element-content-newline': 'off',
    "vue/singleline-html-element-content-newline": ["error", {
        "ignoreWhenNoAttributes": true,
        "ignoreWhenEmpty": true,
        "ignores": ["pre", "textarea"]
      }],
    "vue/html-closing-bracket-spacing": [
        "error",
        {
            "selfClosingTag": "never"
        }
    ],
    "vue/html-self-closing": ["error", {
        "html": {
          "void": "always",
          "normal": "never",
          "component": "always"
        },
        "svg": "always",
        "math": "always"
      }]
  }
}