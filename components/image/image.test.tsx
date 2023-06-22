import Image, { availableRoundedSizes } from "./image";
import { render } from "@testing-library/react";

describe("Image", () => {
  {
    Object.keys(availableRoundedSizes).forEach((size) => {
      it(`Snapshot render with roundedeSize = ${size}`, () => {
        const view = render(
          <Image
            src="https://avatars.githubusercontent.com/u/1?v=4"
            alt="avatar"
            width={100}
            height={100}
            roundedSize={size}
          />
        );
        Image;
        expect(view).toMatchSnapshot();
      });
    });
  }
});
