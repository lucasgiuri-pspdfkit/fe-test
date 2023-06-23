import React from "react";
import { Story, Meta } from "@storybook/react";
import Button from "../components/button/button";
import { ButtonProps } from "../components/button/button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["default", "primary", "secondary", "tertiary"],
      },
    },
    type: {
      control: {
        type: "select",
        options: ["button", "submit"],
      },
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
    isSelected: {
      control: {
        type: "boolean",
      },
    },
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Default",
};

export const Primary = Template.bind({});
Primary.args = {
  text: "Primary",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Secondary",
  variant: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  text: "Tertiary",
  variant: "tertiary",
};
