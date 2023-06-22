import { render, screen, fireEvent } from "@testing-library/react";
import Button, { availableVariants, availableButtonTypes } from "./button";

const keyTypes = Object.keys(availableButtonTypes);
const keyVariants = Object.keys(availableVariants);

describe("Button", () => {
  const onClick = jest.fn();
  keyVariants.forEach((variant) => {
    keyTypes.forEach((type) => {
      it(`should render a button with variant ${variant} && type ${type}`, () => {
        const view = render(
          <Button type={type} variant={variant} onClick={onClick} />
        );
        expect(view).toMatchSnapshot();
        expect(screen.getByRole("button")).toHaveAttribute("type", type);
      });
    });
  });

  keyVariants.forEach((variant) => {
    keyTypes.forEach((type) => {
      it(`should render a button with variant ${variant} && type ${type} && isSelected true`, () => {
        const view = render(
          <Button type={type} variant={variant} onClick={onClick} isSelected />
        );
        expect(view).toMatchSnapshot();
        expect(screen.getByRole("button")).toHaveAttribute("type", type);
      });
    });
  });

  it("should call onClick when clicked", () => {
    render(<Button onClick={onClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });

  it("should render a button with text", () => {
    const view = render(<Button text="test" onClick={onClick} />);
    expect(view).toMatchSnapshot();
    expect(screen.getByRole("button")).toHaveTextContent("test");
  });

  it("should render a button with children", () => {
    const view = render(
      <Button onClick={onClick}>
        <div>test</div>
      </Button>
    );
    expect(view).toMatchSnapshot();
    expect(screen.getByRole("button")).toHaveTextContent("test");
  });

  it("should render a button with isDisabled true", () => {
    const onClickMock = jest.fn();
    render(<Button text="Click me" isDisabled onClick={onClickMock} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(onClickMock).not.toHaveBeenCalled();
  });
});
