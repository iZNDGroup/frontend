module.exports = {
  extends: ["react-app", "prettier", "prettier/react"],
  plugins: ["prettier"],
  globals: {
    compare: false,
    Context: false,
    format: false,
    Franson: false,
    jQuery: false,
    glob: false,
    goog: false,
    GpsGate: false,
    localize: false,
    MochiKit: false,
    MUI: false,
    vtMain: false
  },
  rules: {
    "react/sort-comp": [
      "error",
      {
        order: ["lifecycle", "everything-else", "rendering"],
        groups: {
          rendering: ["/^_render.+$/", "/^render.+$/", "render"]
        }
      }
    ],
    "prettier/prettier": "error"
  }
};
