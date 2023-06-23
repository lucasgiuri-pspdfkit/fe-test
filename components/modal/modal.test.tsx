import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./modal";

const event = {
  id: "1",
  img: {
    src: "https://via.placeholder.com/400",
    alt: "placeholder",
  },
  title: "Test title",
  location: "Test location",
  date: {
    start: 1620000000000,
    end: 1620000000000,
  },
  coverUrl: "https://via.placeholder.com/400",
};

describe("Modal", () => {
  it("should render modal", () => {
    const onClose = jest.fn();
    const view = render(<Modal event={event} onClose={onClose} />);
    expect(screen.getByText("Test title")).toBeInTheDocument();
    expect(screen.getByText("Test location")).toBeInTheDocument();
    expect(view).toMatchSnapshot();
  });

  it("should call onClose when clicking outside modal", () => {
    const onClose = jest.fn();
    render(<Modal event={event} onClose={onClose} />);
    fireEvent.click(screen.getByTestId("modal"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
