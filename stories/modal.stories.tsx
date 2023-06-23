import React from "react";
import { Story, Meta } from "@storybook/react";
import Modal from "../components/modal/modal";
import { ModalProps } from "../components/modal/modal";

export default {
  title: "Modal",
  component: Modal,
  argTypes: {
    event: {
      control: {
        type: "object",
      },
    },
    onClose: { action: "closed" },
  },
} as Meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  event: {
    id: "1",
    img: {
      src: "https://avatars.githubusercontent.com/u/1?v=4",
      alt: "Event Image",
    },
    title: "Event Title",
    location: "Event Location",
    date: {
      start: Date.now(),
      end: Date.now() + 86400000, // Adding 1 day in milliseconds
    },
    coverUrl: "https://example.com/cover.jpg",
  },
};
