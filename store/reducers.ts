import { ADD_USER, REMOVE_USER, UPDATE_USER } from "./actions";
// Types
import { UserData } from "../types";

export type UserDataAction = {
  type: typeof ADD_USER | typeof UPDATE_USER | typeof REMOVE_USER;
  payload: UserData | { id: string };
};

export const usersReducer = (
  state: UserData,
  action: UserDataAction
): UserData => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        ...action.payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
