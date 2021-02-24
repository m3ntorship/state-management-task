module.exports = {
  extends: "stylelint-config-standard",
  ignoreFiles: ["src/css/tailwind.css"],
  rules: {
    "at-rule-empty-line-before": "never",
    "declaration-empty-line-before": "never",
    "no-descending-specificity": null,
    "no-duplicate-selectors": true,
    "selector-descendant-combinator-no-non-space": null,
    indentation: null,
    "declaration-colon-newline-after": null,
  },
};
