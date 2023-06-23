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

  it("Snapshot with isRequired", () => {
    const onChange = jest.fn();
    const { container } = render(
      <Textarea placeholder="" value="" onChange={onChange} isRequired />
    );
    expect(container).toMatchSnapshot();
  });

  test("calls onChange with updated value", () => {
    const mockOnChange = jest.fn();
    const placeholder = "Enter text";
    const initialValue = "Initial value";

    render(
      <Textarea
        placeholder={placeholder}
        value={initialValue}
        onChange={mockOnChange}
      />
    );

    const textarea = screen.getByPlaceholderText(placeholder);
    const updatedValue = "Updated value";

    fireEvent.change(textarea, { target: { value: updatedValue } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(updatedValue);
  });
});
