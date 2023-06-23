import React, { createContext, useReducer, ReactNode } from "react";
// Reducers
import { usersReducer } from "./reducers";
// Types
import type { UserDataAction } from "./reducers";
import type { UserData } from "../types";

type StoreProviderProps = {
  children: JSX.Element;
};

type UsersStateAndDispatch = {
  state: UserData;
  dispatch: React.Dispatch<UserDataAction>;
};

const initialState: UserData = {
  id: "",
  slug: "",
  coverUrl: "",
  name: "",
  description: "",
  musicGenres: [],
  recordLabel: "",
  website: "",
  spotify: "",
  soundcloud: "",
  mixcloud: "",
};

export const StoreUsersContext = createContext<UsersStateAndDispatch>({
  state: initialState,
  dispatch: () => null,
});

export const StoreUsersProvider = ({ children }: StoreProviderProps) => {
  const [state, dispatch] = useReducer(usersReducer, initialState);

  return (
    <StoreUsersContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreUsersContext.Provider>
  );
};
