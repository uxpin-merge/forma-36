module.exports = {
  components: {
    categories: [
      {
        name: 'Typography',
        include: ['packages/components/typography/src/DisplayText.tsx'],
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
      {
        name: 'Components V4',
        include: [
          'packages/components/button/src/Button.tsx',
          'packages/components/inputs/src/checkbox/Checkbox.tsx',
          'packages/components/spinner/src/Spinner.tsx',
        ],
      },
      {
        name: 'Components V3',
        include: [
          'packages/forma-36-react-components/src/components/TextField/TextField.tsx',
          // 'packages/forma-36-react-components/src/components/Tooltip/Tooltip.tsx',
          // 'packages/forma-36-react-components/src/components/Dropdown/Dropdown.tsx',
          'packages/forma-36-react-components/src/components/Switch/Switch.tsx',
          'packages/forma-36-react-components/src/components/Note/Note.tsx',
          // 'packages/forma-36-react-components/src/components/Card/Card.tsx',
          // 'packages/forma-36-react-components/src/components/Tabs/Tabs.tsx',
          // 'packages/forma-36-react-components/src/components/Modal/Modal.tsx',
          'packages/forma-36-react-components/src/components/CopyButton/CopyButton.tsx',
        ],
      },
    ],
    wrapper: 'packages/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'Forma 36',
};
