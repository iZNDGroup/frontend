import PropTypes from "prop-types";

const isRequired = validate => {
  const tmp = (isRequired, props, propName, componentName, location) => {
    if (props[propName] == null) {
      if (isRequired) {
        return new Error(
          "The " +
            location +
            " `" +
            propName +
            "` is marked as required in " +
            "`" +
            componentName +
            "`, but its value is `undefined/null`."
        );
      }
      return null;
    } else {
      return validate(props, propName, componentName, location);
    }
  };
  const newValidate = tmp.bind(null, false);
  newValidate.isRequired = tmp.bind(null, true);
  return newValidate;
};

const createComponentOfType = types => {
  const validate = (props, propName, componentName, location) => {
    if (props[propName] && !types.includes(props[propName].type)) {
      return new Error(
        "Invalid " +
          location +
          " `" +
          propName +
          "` supplied to `" +
          componentName +
          "`, expected element of type(s) `" +
          types.map(type => type.name || "<<anonymous>>").join(", ") +
          "`."
      );
    }
    return null;
  };
  return isRequired(validate);
};

const createChildrenOfType = type => {
  return PropTypes.oneOfType([type, PropTypes.arrayOf(type)]);
};

export default {
  componentOfType: createComponentOfType,
  childrenOfType: createChildrenOfType
};
