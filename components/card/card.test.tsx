import Card from "./card";
import { render } from "@testing-library/react";

const musicGenres = [
  {
    name: "test",
  },
  {
    name: "test2",
  },
];

describe("Card", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Card name="test" musicGenres={musicGenres} />
    );
    expect(container).toMatchSnapshot();
  });

  it("render with no musicGenres", () => {
    const { container } = render(<Card name="test" />);
    expect(container).toMatchSnapshot();
  });

  it("render with audioSrc", () => {
    const { container } = render(
      <Card
        name="test"
        musicGenres={musicGenres}
        audioSrc="https://p.scdn.co/mp3-preview/06f73c955a67b6af55f0419da0ab764bee37bb37?cid=26fa853e56704f3a820c6f7ec8d59212"
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("render with empty musicGenres", () => {
    const { container } = render(<Card name="test" musicGenres={[]} />);
    expect(container).toMatchSnapshot();
  });
});
