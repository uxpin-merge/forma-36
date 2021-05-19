module.exports = {
  components: {
    categories: [
      {
        name: 'Form',
        include: ['packages/components/button/src/Button.tsx'],
      },
      {
        name: 'Icon',
        include: [
          'packages/components/icon/src/Icon.tsx',
          'packages/components/icons/src/ArrowDown.tsx',
          'packages/components/icons/src/Calendar.tsx',
          'packages/components/icons/src/ChatBubble.tsx',
          'packages/components/icons/src/Clock.tsx',
          'packages/components/icons/src/Code.tsx',
        ],
      },
    ],
    wrapper: 'packages/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'Forma 36',
};
