import createWebpackConfigAsync from "@expo/webpack-config/webpack";

new createWebpackConfigAsync.EnvironmentPlugin({
    NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
    DEBUG: false,
  });