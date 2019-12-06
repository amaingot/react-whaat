export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

interface LoginStartAction {
  type: typeof LOGIN_START;
  payload: {
    email: string;
    password: string;
  }
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: {
    token: string;
    jwt: string;
    // user: {
    //   id: number;
    //   email: string;
    //   firstName: string;
    //   lastName: string;
    // }
  }
}

interface LoginFailAction {
  type: typeof LOGIN_FAIL;
  payload: {
    error: string;
  }
}

export type AuthActions = LoginStartAction | LoginSuccessAction | LoginFailAction;