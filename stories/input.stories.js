import Input from "../components/input/input";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    type: { control: "text" },
    placeholder: { control: "text" },
    value: { control: "text" },
    onChange: { action: "changed" },
  },
};

const Template = (args) => {
  const { type, placeholder, value } = args;
  return (
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(value) => console.log(`Value changed: ${value}`)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  type: "text",
  placeholder: "Enter text here",
  value: "",
};
