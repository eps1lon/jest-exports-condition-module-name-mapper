const { resolve: pathResolve } = require("path");

module.exports = (path, options) => {
  // replace with an allow list for all build modules
  if (path === "react") {
    return options.defaultResolver(path, {
      ...options,
      moduleDirectory: [
        // needs to be first
        pathResolve(options.rootDir, "build"),
        ...options.moduleDirectory,
      ],
      // example for custom conditions for a config
      conditions: ["react-native"],
    });
  }

  return options.defaultResolver(path, options);
};
