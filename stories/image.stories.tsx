import React from "react";
import { Story, Meta } from "@storybook/react";
import ImageComponent from "../components/image/image";
import { ImageComponentProps } from "../components/image/image";

export default {
  title: "ImageComponent",
  component: ImageComponent,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    roundedSize: {
      control: {
        type: "select",
        options: ["md", "full", "none", "2xl", "3xl"],
      },
    },
    width: { control: "number" },
    height: { control: "number" },
  },
} as Meta;

const Template: Story<ImageComponentProps> = (args) => (
  <ImageComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  src: "https://avatars.githubusercontent.com/u/1?v=4",
  alt: "Example Image",
};
