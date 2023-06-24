import React from "react";
import { Story, Meta } from "@storybook/react";
import Card, { CardProps } from "../components/card/card";

export default {
  title: "Card",
  component: Card,
  argTypes: {
    name: { control: "text" },
    musicGenres: { control: "array" },
    audioSrc: { control: "text" },
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Artist Name",
  musicGenres: [{ name: "Genre 1" }, { name: "Genre 2" }],
  audioSrc:
    "https://p.scdn.co/mp3-preview/06f73c955a67b6af55f0419da0ab764bee37bb37?cid=26fa853e56704f3a820c6f7ec8d59212",
};

export const WithoutGenres = Template.bind({});
WithoutGenres.args = {
  name: "Artist Name",
  audioSrc:
    "https://p.scdn.co/mp3-preview/06f73c955a67b6af55f0419da0ab764bee37bb37?cid=26fa853e56704f3a820c6f7ec8d59212",
};

export const WithoutAudio = Template.bind({});
WithoutAudio.args = {
  name: "Artist Name",
  musicGenres: [{ name: "Genre 1" }, { name: "Genre 2" }],
};

export const WithoutGenresAndAudio = Template.bind({});
WithoutGenresAndAudio.args = {
  name: "Artist Name",
};
