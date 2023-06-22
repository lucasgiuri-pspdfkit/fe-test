import Text from "../components/text/text";

export default {
  title: "Text",
  component: Text,
  argTypes: {
    type: { control: "text" },
    text: { control: "title" },
  },
};

const Template = (args) => {
  const { text, type } = args;

  return <Text type={type} text={text} />;
};

export const TextWithCustomText = Template.bind({});

TextWithCustomText.args = {
  text: "Custom Text",
  type: "text",
};

export const TextWithTypeItalic = Template.bind({});

TextWithTypeItalic.args = {
  text: "Custom Text",
  type: "italic",
};

export const TextWithTypeTitle = Template.bind({});

TextWithTypeTitle.args = {
  text: "Custom Text",
  type: "title",
};
