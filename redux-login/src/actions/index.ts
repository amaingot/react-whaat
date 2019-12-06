import * as AuthActions from './AuthActions';

export default {
  ...AuthActions
};

export type AppActions = AuthActions.AuthActions;