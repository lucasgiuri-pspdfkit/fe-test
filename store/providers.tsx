import React, { createContext, useReducer, ReactNode } from "react";
// Reducers
import { usersReducer } from "./reducers";
// Types
import type { UserDataState, UserDataAction } from "./reducers";

type StoreProviderProps = {
  children: JSX.Element;
};

type UsersStateAndDispatch = {
  state: UserDataState;
  dispatch: React.Dispatch<UserDataAction>;
};

const initialState: UserDataState = {
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
