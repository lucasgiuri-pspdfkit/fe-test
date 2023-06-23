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

  it("render with empty musicGenres", () => {
    const { container } = render(<Card name="test" musicGenres={[]} />);
    expect(container).toMatchSnapshot();
  });
});
