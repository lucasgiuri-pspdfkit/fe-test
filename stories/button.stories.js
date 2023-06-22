import Button from "../components/button/button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    type: { control: "button" },
    text: { control: "text" },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => {
  const { text, type, onClick } = args;

  return <Button type={type} onClick={onClick} text={text} />;
};

export const ButtonWithCustomText = Template.bind({});

ButtonWithCustomText.args = {
  text: "Custom Text",
  type: "button",
};
