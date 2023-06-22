import List, { availableListTypes } from "./list";
import { render } from "@testing-library/react";

const arrayWithOneItem = [
  {
    id: "1",
    title: "example",
    location: "example",
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
    const view = render(
      <List type={availableListTypes.row} items={arrayWithOneItem} />
    );
    expect(view).toMatchSnapshot();
  });

  it("Snapshot renders with five items and row", () => {
    const view = render(
      <List type={availableListTypes.row} items={arrayWithFiveItems} />
    );
    expect(view).toMatchSnapshot();
  });

  it("Snapshot renders with just one item and column", () => {
    const view = render(
      <List type={availableListTypes.column} items={arrayWithOneItem} />
    );
    expect(view).toMatchSnapshot();
  });

  it("Snapshot renders with five items and column", () => {
    const view = render(
      <List type={availableListTypes.column} items={arrayWithFiveItems} />
    );
    expect(view).toMatchSnapshot();
  });
});
