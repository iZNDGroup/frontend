const stylelint = require("stylelint");
const prettier = require("prettier");

const ruleName = "prettier/prettier";

module.exports = stylelint.createPlugin(ruleName, function() {
  return function(root, result) {
    const output = prettier.check(root.source.input.css, {
      parser: "css"
    });

    if (!output) {
      stylelint.utils.report({
        ruleName: ruleName,
        result: result,
        node: root,
        line: 0,
        column: 0,
        message: `Unexpected formatting (${ruleName})`
      });
    }
  };
});

module.exports.ruleName = ruleName;
