import { AuthActions, LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/AuthActions";

export interface AuthState {
  loggedIn: boolean;
  token?: string;
  jwt?: string;
  loading: boolean;
  error?: string;
}

export const AuthInitialState: AuthState = {
  loggedIn: false,
  loading: false
};

export const AuthReducer = (state = AuthInitialState, action: AuthActions): AuthState => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        token: action.payload.token,
        jwt: action.payload.jwt
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};
