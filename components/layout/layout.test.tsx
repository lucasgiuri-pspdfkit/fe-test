import React from "react";
import { render } from "@testing-library/react";
import Layout from "./Layout";

describe("Layout", () => {
  it("matches the snapshot", () => {
    const view = render(<Layout>Test Content</Layout>);
    expect(view).toMatchSnapshot();
  });
});
