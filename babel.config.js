module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
          alias: {
            "@types": "./src/@types",
            "@assets": "./src/application/assets",
            "@components": "./src/application/components",
            "@flows": "./src/application/flows",
            "@hooks": "./src/application/hooks",
          },
        },
      ],
    ],
  };
};
