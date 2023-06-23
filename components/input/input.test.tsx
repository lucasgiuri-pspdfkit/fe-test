import Input from "./input";
import { render, screen, fireEvent } from "@testing-library/react";

const availableTypes = ["text", "password", "email"];

describe("Input", () => {
  it("Snapshot with empty placeholder and empty value", () => {
    const onChange = jest.fn();
    const { container } = render(
      <Input placeholder="" value="" onChange={onChange} />
    );
    expect(container).toMatchSnapshot();
  });

  it("Snapshot with isRequired", () => {
    const onChange = jest.fn();
    const { container } = render(
      <Input placeholder="" value="" onChange={onChange} isRequired />
    );
    expect(container).toMatchSnapshot();
  });

  availableTypes.forEach((type) => {
    it(`Snapshot with type ${type}`, () => {
      const onChange = jest.fn();
      const { container } = render(
        <Input
          placeholder="placeholder test"
          value="value test"
          onChange={onChange}
          type={type}
        />
      );
      expect(container).toMatchSnapshot();
    });
  });

  it("Snapshot with label", () => {
    const onChange = jest.fn();
    const { container } = render(
      <Input
        label="label test"
        placeholder="placeholder test"
        value="value test"
        onChange={onChange}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("handles onChange event", () => {
    const handleChange = jest.fn();
    render(
      <Input
        placeholder="placeholder test"
        value="value test"
        onChange={handleChange}
      />
    );
    const elm = screen.getByPlaceholderText("placeholder test");
    fireEvent.change(elm, {
      target: { value: "new value" },
    });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith("new value");
  });
});
