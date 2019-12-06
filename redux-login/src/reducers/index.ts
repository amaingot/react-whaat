import { combineReducers } from "redux";
import { AppActions } from "../actions";

import { AuthReducer, AuthState, AuthInitialState } from "./AuthReducers";

export interface AppState {
  auth: AuthState;
}

export const AppInitialState: AppState = {
  auth: AuthInitialState
};

export const rootReducer = combineReducers<AppState, AppActions>({ auth: AuthReducer });
