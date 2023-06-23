import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Carousel from "../components/carousel/carousel";
import type { CarouselProps } from "../components/carousel/carousel";

export default {
  title: "Carousel",
  component: Carousel,
} as Meta;

const mockItems = [
  {
    id: "1",
    img: {
      src: "https://avatars.githubusercontent.com/u/1?v=4",
      alt: "Image 1",
      width: 100,
      height: 100,
    },
    date: {
      start: 123456789,
      end: 123456789,
    },
    title: "Title 1",
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
      start: 123456789,
      end: 123456789,
    },
    title: "Title 2",
    location: "Location 2",
  },
  {
    id: "3",
    img: {
      src: "https://avatars.githubusercontent.com/u/1?v=4",
      alt: "Image 2",
      width: 100,
      height: 100,
    },
    date: {
      start: 123456789,
      end: 123456789,
    },
    title: "Title 2",
    location: "Location 2",
  },
  {
    id: "4",
    img: {
      src: "https://avatars.githubusercontent.com/u/1?v=4",
      alt: "Image 2",
      width: 100,
      height: 100,
    },
    date: {
      start: 123456789,
      end: 123456789,
    },
    title: "Title 2",
    location: "Location 2",
  },
  {
    id: "5",
    img: {
      src: "https://avatars.githubusercontent.com/u/1?v=4",
      alt: "Image 2",
      width: 100,
      height: 100,
    },
    date: {
      start: 123456789,
      end: 123456789,
    },
    title: "Title 2",
    location: "Location 2",
  },
];

const Template: Story<CarouselProps> = (args) => <Carousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: mockItems,
  onClick: (id) => {
    console.log(`Clicked item with ID: ${id}`);
  },
};
