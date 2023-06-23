import React from "react";
import { Story, Meta } from "@storybook/react";
import Textarea from "../components/textarea/textarea";
import { TextareaProps } from "../components/textarea/textarea";

export default {
  title: "Textarea",
  component: Textarea,
  argTypes: {
    placeholder: { control: "text" },
    value: { control: "text" },
    onChange: { action: "changed" },
  },
} as Meta;

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter your text",
  value: "value",
};

