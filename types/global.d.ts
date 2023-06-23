import "i18next";

// declare custom type options so the return is always a string.

declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

// update the initialization so the behavior matches the type:
i18next.init({
  returnNull: false,
  // ... any other initializations here
});
