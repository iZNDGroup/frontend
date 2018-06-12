module.exports = {
  plugins: ["./stylelint.prettier.js"],
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  rules: {
    "declaration-colon-newline-after": null,
    "at-rule-no-vendor-prefix": true,
    "media-feature-name-no-vendor-prefix": true,
    "property-no-vendor-prefix": true,
    "selector-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,
    "prettier/prettier": true
  }
};
