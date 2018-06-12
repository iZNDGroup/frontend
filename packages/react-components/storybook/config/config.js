import "babel-polyfill";
import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";

setOptions({
  addonPanelInRight: true,
  sortStoriesByKind: true,
  url: "http://atlas.gpsgate.com/display/DEV/React+Components"
});

const req = require.context("../../src", true, /\.story\.js$/);

function loadStories() {
  require("../../src/storybook/welcome");
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
