import React from "react";
import { Story, Meta } from "@storybook/react";
import List from "../components/list/list";
import { ListProps } from "../components/list/list";
import { ListItem } from "../types";

export default {
  title: "List",
  component: List,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["row", "column"],
      },
    },
    items: { control: { disable: true } },
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: Story<ListProps> = (args) => <List {...args} />;

const items: ListItem[] = [
  {
    id: "1",
    img: {
      src: "https://avatars.githubusercontent.com/u/1?v=4",
      alt: "Image 1",
      width: 100,
      height: 100,
    },
    date: {
      start: 1620000000000,
      end: 1620000000000,
    },
    title: "Item 1",
    location: "Location 1",
  },
  {
    id: "2",
    img: {
      src: "https://avatars.githubusercontent.com/u/1?v=4",
      alt: "Image 2",
      width: 100,
      height: 100,
    },
    date: {
      start: 1620000000000,
      end: 1620000000000,
    },
    title: "Item 2",
    location: "Location 2",
  },
];

export const Default = Template.bind({});
Default.args = {
  type: "row",
  items: items,
};
