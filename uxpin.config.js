module.exports = {
  components: {
    categories: [
      {
        name: 'Typography',
        include: [
          'packages/components/typography/src/DisplayText.tsx',
          'packages/components/headingM/HeadingM.tsx',
          'packages/components/paragraphM/ParagraphM.tsx',
          'packages/components/sectionHeadingM/SectionHeadingM.tsx',
          'packages/components/subheadingM/SubheadingM.tsx',
        ],
      },
      {
        name: 'Icon',
        include: ['packages/components/iconM/IconM.tsx'],
      },
      {
        name: 'Form elements',
        include: [
          'packages/forma-36-react-components/src/components/TextField/TextField.tsx',
          'packages/forma-36-react-components/src/components/CheckboxField/CheckboxField.tsx',
          'packages/forma-36-react-components/src/components/RadioButtonField/RadioButtonField.tsx',
        ],
      },
      {
        name: 'Components V4',
        include: [
          'packages/components/badge/src/Badge.tsx',
          'packages/components/button/src/Button.tsx',
          // 'packages/components/inputs/src/checkbox/Checkbox.tsx',
          // 'packages/components/inputs/src/radio-button/RadioButton.tsx',
          'packages/components/spinner/src/Spinner.tsx',
          'packages/components/validation-message/src/ValidationMessage.tsx',
        ],
      },
      {
        name: 'Components V3',
        include: [
          'packages/forma-36-react-components/src/components/Tooltip/Tooltip.tsx',
          // 'packages/forma-36-react-components/src/components/Dropdown/Dropdown.tsx',
          'packages/forma-36-react-components/src/components/Switch/Switch.tsx',
          'packages/forma-36-react-components/src/components/Note/Note.tsx',
          'packages/forma-36-react-components/src/components/Card/Card.tsx',
          'packages/forma-36-react-components/src/components/Tabs/Tabs.tsx',
          'packages/forma-36-react-components/src/components/Tabs/Tab/Tab.tsx',
          // 'packages/forma-36-react-components/src/components/Modal/Modal.tsx',
          // 'packages/forma-36-react-components/src/components/Modal/ModalContent/ModalContent.tsx',
          // 'packages/forma-36-react-components/src/components/Modal/ModalHeader/ModalHeader.tsx',
          // 'packages/forma-36-react-components/src/components/Modal/ModalControls/ModalControls.tsx',
          'packages/forma-36-react-components/src/components/CopyButton/CopyButton.tsx',
          // 'packages/forma-36-react-components/src/components/Notification/Notification.tsx',
          'packages/forma-36-react-components/src/components/Illustration/Illustration.tsx',
          'packages/forma-36-react-components/src/components/Asset/Asset.tsx',
          'packages/forma-36-react-components/src/components/Pill/Pill.tsx',
          'packages/forma-36-react-components/src/components/Workbench/Workbench.tsx',
          'packages/forma-36-react-components/src/components/WorkbenchM/WorkbenchM.tsx',
          'packages/forma-36-react-components/src/components/WorkbenchHeaderM/WorkbenchHeaderM.tsx',
          'packages/forma-36-react-components/src/components/WorkbenchSidebarM/WorkbenchSidebarM.tsx',
          'packages/forma-36-react-components/src/components/WorkbenchContentM/WorkbenchContentM.tsx',
        ],
      },
    ],
    wrapper: 'packages/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'Forma 36',
};
