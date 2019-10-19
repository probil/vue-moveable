const isLib = process.env.VUE_CLI_BUILD_TARGET === 'lib';

module.exports = {
  presets: [
    ['@vue/cli-plugin-babel/preset', {
      useBuiltIns: isLib
        ? false
        : 'usage',
    }],
  ],
};
