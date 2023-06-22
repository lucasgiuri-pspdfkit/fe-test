import "../styles/globals.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    clearable: false,
    list: [
      {
        name: "Light",
        class: [],
        default: true,
      },
      {
        name: "Dark",
        class: ["dark"],
      },
    ],
  },
  nextRouter: {
    query: {
      foo: "this-is-a-global-override",
    },
  },
};
