import React from 'react';

import Button from '../components/button';

export default {
  title: 'Button',
  component: Button,
};

export const Emoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      Hello
    </span>
  </Button>
)

// const Template = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
