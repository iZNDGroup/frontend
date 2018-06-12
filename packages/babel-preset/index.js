module.exports = function() {
  switch (process.env.NODE_ENV) {
    case "test":
      return {
        presets: [
          require("babel-preset-env"),
          require("babel-preset-react"),
          require("babel-preset-stage-2")
        ]
      };
    default:
      return {
        presets: [
          [require("babel-preset-env"), { modules: false }],
          require("babel-preset-react"),
          require("babel-preset-stage-2")
        ]
      };
  }
};
