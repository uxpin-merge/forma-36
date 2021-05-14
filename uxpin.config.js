module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'packages/components/icon/src/Icon.tsx',
          'packages/components/button/src/Button.tsx',
        ],
      },
    ],
    wrapper: 'packages/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'Forma 36',
};
