import Textarea from "./textarea";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Textarea", () => {
  it("should render the textarea component", () => {
    const onChange = jest.fn();
    render(
      <Textarea
        placeholder="Enter text"
        value="some value"
        onChange={onChange}
      />
    );
    const textarea = screen.getByPlaceholderText("Enter text");
    expect(textarea).toBeInTheDocument();
  });
});
