import { User } from 'firebase';

export interface IAction {
  type: string,
  [key: string]: any, // Payload could be any type
}

export interface IState {
  user: User | null,
  isLoggedIn: boolean,
  dashboard: { [key: string]: string },
  settings: { [key: string]: string },
}

export const initialState: IState = {
  user: null,
  isLoggedIn: false,
  dashboard: {},
  settings: {},
};

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS': {
      return {
        ...state,
        user: action.user,
        isLoggedIn: action.user !== null,
      }
    }
    case 'LOGOUT': {
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      }
    }
    default:
      return state;
  }
};

export default reducer;
