import Text, { availableTextTypes } from "./text";
import { render } from "@testing-library/react";
// Types
import type { AvailableTextTypes } from "./text";

type A = keyof AvailableTextTypes;
describe("Text", () => {
  const keys = Object.keys(availableTextTypes);
  keys.forEach((type) => {
    it(`Snapshot with type ${type}`, () => {
      const { container } = render(<Text type={type} text="test" />);
      expect(container).toMatchSnapshot();
    });
  });

  keys.forEach((type) => {
    it(`Snapshot with type ${type} and custom id`, () => {
      const { container } = render(
        <Text id="custom" type={type} text="test" />
      );
      expect(container).toMatchSnapshot();
    });
  });

  keys.forEach((type) => {
    it(`Snapshot with type ${type} and isBold true`, () => {
      const { container } = render(<Text isBold type={type} text="test" />);
      expect(container).toMatchSnapshot();
    });
  });

  keys.forEach((type) => {
    it(`Snapshot with type ${type} and isWhite true`, () => {
      const { container } = render(<Text isWhite type={type} text="test" />);
      expect(container).toMatchSnapshot();
    });
  });
});
