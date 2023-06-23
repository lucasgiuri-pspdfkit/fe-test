import List, { availableListTypes } from "./list";
import { fireEvent, screen, render } from "@testing-library/react";

const arrayWithOneItem = [
  {
    id: "1",
    title: "example",
    location: "example",
    date: {
      start: 123456789,
      end: 123456789,
    },
    img: {
      src: "https://avatars.githubusercontent.com/u/1?v=4",
      alt: "example",
      width: 150,
      height: 150,
    },
  },
];

const arrayWithFiveItems = [
  {
    id: "1",
    title: "example",
    location: "example",
    date: {
      start: 123456789,
      end: 123456789,
    },
    img: {
      src: "https://avatars.githubusercontent.com/u/1?v=4",
      alt: "example",
      width: 150,
      height: 150,
    },
  },
  {
    id: "2",
    title: "example2",
    location: "example2",
    date: {
      start: 123456789,
      end: 123456789,
    },
    img: {
      src: "https://avatars.githubusercontent.com/u/2?v=4",
      alt: "example2",
      width: 150,
      height: 150,
    },
  },
  {
    id: "3",
    title: "example3",
    location: "example3",
    date: {
      start: 123456789,
      end: 123456789,
    },
    img: {
      src: "https://avatars.githubusercontent.com/u/3?v=4",
      alt: "example3",
      width: 150,
      height: 150,
    },
  },
  {
    id: "4",
    title: "example4",
    location: "example4",
    date: {
      start: 123456789,
      end: 123456789,
    },
    img: {
      src: "https://avatars.githubusercontent.com/u/4?v=4",
      alt: "example4",
      width: 150,
      height: 150,
    },
  },
  {
    id: "5",
    title: "example5",
    location: "example5",
    img: {
      src: "https://avatars.githubusercontent.com/u/5?v=4",
      alt: "example5",
      width: 150,
      height: 150,
    },
  },
];

describe("List", () => {
  it("Snapshot renders with just one item and row", () => {
    const onClick = jest.fn();
    const view = render(
      <List
        type={availableListTypes.row}
        items={arrayWithOneItem}
        onClick={onClick}
      />
    );
    expect(view).toMatchSnapshot();
  });

  it("onClick is called when clicking on an item", () => {
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
    ];
    const onClickMock = jest.fn();
    render(<List type="row" items={mockItems} onClick={onClickMock} />);

    const listItem = screen.getByText("Title 1");
    fireEvent.click(listItem);

    expect(onClickMock).toHaveBeenCalledWith("1");
  });

  it("Snapshot renders with five items and row", () => {
    const view = render(
      <List type={availableListTypes.row} items={arrayWithFiveItems} />
    );
    expect(view).toMatchSnapshot();
  });

  it("Snapshot renders with just one item and column", () => {
    const onClick = jest.fn();
    const view = render(
      <List
        type={availableListTypes.column}
        items={arrayWithOneItem}
        onClick={onClick}
      />
    );
    expect(view).toMatchSnapshot();
  });

  it("Snapshot renders with five items and column", () => {
    const onClick = jest.fn();
    const view = render(
      <List
        type={availableListTypes.column}
        items={arrayWithFiveItems}
        onClick={onClick}
      />
    );
    expect(view).toMatchSnapshot();
  });
});
