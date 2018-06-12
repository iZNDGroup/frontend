var Franson = {};
Franson.Util = {};
Franson.Util.SvgServerPathResolver = {};
Franson.Util.SvgServerPathResolver.resolveSingle = function(icon) {
  switch (icon.lib) {
    case "FontAwesome":
      return "icons/FontAwesome/svgs/" + icon.type + "/" + icon.name + ".svg#i";
    case "GpsGate":
      return "icons/GpsGate/svgs/" + icon.type + "/" + icon.name + ".svg#i";
    default:
      throw new Error(`Unknown icon library: ${icon.lib}`);
  }
};
