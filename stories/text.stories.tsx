import React from "react";
import { Story, Meta } from "@storybook/react";
import Text from "../components/text/text";
import type { TextProps } from "../components/text/text";

export default {
  title: "Text",
  component: Text,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: [
          "h1",
          "h2",
          "h3",
          "h4",
          "label",
          "subLabel",
          "span",
          "p",
          "smallP",
        ],
      },
    },
    isWhite: {
      control: {
        type: "boolean",
      },
    },
    isBold: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta;

const Template: Story<TextProps> = (args) => {
  return <Text {...args} />;
};

export const Heading1 = Template.bind({});
Heading1.args = {
  type: "h1",
  text: "Heading 1",
};

export const Heading2 = Template.bind({});
Heading2.args = {
  type: "h2",
  text: "Heading 2",
};

export const Heading3 = Template.bind({});
Heading3.args = {
  type: "h3",
  text: "Heading 3",
};

export const Heading4 = Template.bind({});
Heading4.args = {
  type: "h4",
  text: "Heading 4",
};

export const Label = Template.bind({});
Label.args = {
  type: "label",
  text: "Label",
};

export const SubLabel = Template.bind({});
SubLabel.args = {
  type: "subLabel",
  text: "Sub Label",
};

export const Span = Template.bind({});
Span.args = {
  type: "span",
  text: "Span",
};

export const SmallParagraph = Template.bind({});
SmallParagraph.args = {
  type: "smallP",
  text: "Small Paragraph",
};

export const DefaultParagraph = Template.bind({});
DefaultParagraph.args = {
  type: "p",
  text: "Default Paragraph",
};
