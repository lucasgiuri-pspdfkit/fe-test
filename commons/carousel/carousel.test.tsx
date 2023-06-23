import { render, screen, fireEvent } from "@testing-library/react";
import Carousel from "./carousel";

const mock2Items = [
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
];

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

describe("Carousel", () => {
  it("should render a carousel", () => {
    const view = render(<Carousel items={mockItems} />);
    expect(view).toMatchSnapshot();
  });

  it("should render a carousel with 2 items, arrow should not be visible", () => {
    render(<Carousel items={mock2Items} />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    expect(screen.getAllByRole("img").length).toBe(2);
  });

  it("should render a carousel with 2 items and click next", () => {
    render(<Carousel items={mockItems} />);
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getAllByRole("img").length).toBe(3);
  });

  it("onClick should be called", () => {
    const onClick = jest.fn();
    render(<Carousel items={mockItems} onClick={onClick} />);
    fireEvent.click(screen.getByText("Title 1"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
