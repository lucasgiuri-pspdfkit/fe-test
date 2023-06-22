# Xceed Test - Lucas Giuri

## Technologies Used

- [Next.js](https://nextjs.org/) - A React framework for building server-side, client-side or even static render.
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Jest](https://jestjs.io/) - A JavaScript testing framework for unit testing.
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.
- [i18next](https://www.i18next.com/) - A JavaScript internationalization framework.
- [Prettier](https://prettier.io/) - A code formatter to ensure consistent code style.
- [ESLint](https://eslint.org/) - A pluggable JavaScript linter to enforce coding standards.

## Why These Technologies?

- **Next.js**: Next.js provides server-side rendering and static site generation capabilities, which makes it ideal for building SEO-friendly single-page applications. It also offers a great developer experience and excellent performance.
- **React**: React is a widely adopted JavaScript library for building user interfaces. It provides a component-based architecture and allows for efficient rendering and state management.
- **Jest**: Jest is a popular testing framework that provides a simple and intuitive API for writing unit tests. It has great support for testing React components and offers features like snapshot testing and mocking.
- **TypeScript**: TypeScript adds static typing to JavaScript, which helps catch errors at compile-time and provides better tooling support. It improves code maintainability and scalability.
- **Tailwind CSS**: Tailwind CSS is a highly customizable utility-first CSS framework. It offers a large set of pre-built utility classes that can be used to rapidly build responsive and consistent UIs.
- **i18next**: i18next is a powerful internationalization framework that provides a simple and flexible way to handle translations in the application. It supports features like plurals, interpolation, and language fallbacks.
- **Prettier**: Prettier is an opinionated code formatter that enforces consistent code style across the project. It helps maintain a clean and readable codebase, especially when multiple developers are working on the project.
- **ESLint**: ESLint is a highly configurable JavaScript linter that helps enforce coding standards and identify potential issues in the code. It improves code quality and maintainability by catching common programming errors.

Please refer to the documentation of each technology for more detailed information on how to use them in your project.


## Project Structure

The project follows the following directory structure:

- `components/`: Contains reusable React components used throughout the application.
  - `ComponentName/`: Represents a specific component.
    - `Component.tsx`: The code for the component itself.
    - `Component.test.tsx`: Tests for the component.

- `pages/`: Contains the Next.js pages that define the routes and handle server-side rendering.
  - `index.tsx`: The main page of the application.
  - `_app.tsx`: The wrapper component for all pages.

- `public/`: Contains public assets and resources used by the application.
  - `icons/`: Contains SVG icons used in the application.
    - `iconname.svg`: An example SVG icon file.
  - `locales/`: Contains localization files for different languages.
    - `en/`: Contains localization files for English language.
      - `common.json`: Localization strings for common elements.

- `commons/`: Contains common constants.
  - `commons.ts`: Contains the commons.
  - `commons.test.ts`: Tests for the helper functions.

- `stories/`: Contains stories for components using Storybook.
  - `componentName.stories.js`: Storybook stories for a specific component.


## Getting Started

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/your-repo.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser and visit [http://localhost:3000](http://localhost:3000)

To run Storybook, follow these steps:

1. Install dependencies (if not already installed): `npm install`
2. Start Storybook: `npm run storybook`
3. Open your browser and visit [http://localhost:6006](http://localhost:6006)

To run the tests, follow these steps:

1. Install dependencies (if not already installed): `npm install`
2. Run the tests: `npm run test`

## Things that can improve
- PWA: applying next-pwa library user can download the website as an app, it could be an interesting point and in just minutes it can be solve but watching the screenshots were not "mobile first" approach so i think it could be a great option in that case.
- Docker: I did not use docker config, I had no more time to do it and i think npm in this case works very easy as well so it was not very relevant in this case.
- Make an api with express: This is completely feasible, in just one extra hour can be done. Taking in account i'm not a backend professional i thought i would do something not very we'll so that is the reason because i directly used the api as an external one.
- Design: I had only the images so i based my design on that but would be amazing to have figma or similar because i have some problems with the colors. In addition i think the scrollbar should be hidden or put it outside of the box. Also the icons that i used are not the official ones.
- E2E Test: This can be done using Playwright or Cypress but i like to split this as a separated repo, I think is better in case we have multiple teams, to not mix the things, in case someone QA expert wants to change something about tests, is better to have those in a separated repo and not do a big PR with no impact on the user.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
