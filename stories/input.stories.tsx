import React from "react";
import { Story, Meta } from "@storybook/react";
import Input from "../components/input/input";
import { InputProps } from "../components/input/input";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    placeholder: {
      control: {
        type: "text",
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
    value: {
      control: {
        type: "text",
      },
    },
    onChange: { action: "changed" },
  },
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter text",
  value: "",
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  placeholder: "Enter text",
  value: "",
  label: "Label",
};
