import Thumbnail from "../components/thumbnail/thumbnail";

export default {
  title: "Thumbnail",
  component: Thumbnail,
  argTypes: {
    src: { control: "button" },
    alt: { control: "text" },
  },
};

const Template = (args) => {
  const { src, alt } = args;

  return <Thumbnail src={src} alt={alt} />;
};

export const ThumbnailCustomSrc = Template.bind({});

ThumbnailCustomSrc.args = {
  alt: "avatar",
  src: "https://avatars.githubusercontent.com/u/1024025?v=4",
};
