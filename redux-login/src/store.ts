import { createStore, Dispatch } from "redux";
import { useSelector as unTypedUseSelector, useDispatch as unTypedUseDispatch } from "react-redux";

import { rootReducer, AppInitialState, AppState } from "./reducers";
import { AppActions } from "./actions";

export const useSelector = <TSelected>(selector: (state: AppState) => TSelected, equalityFn?: (left: TSelected, right: TSelected) => boolean): TSelected =>
  unTypedUseSelector<AppState, TSelected>(selector, equalityFn);

export const useDispatch = () => unTypedUseDispatch<Dispatch<AppActions>>();

const devtools: any = (window as any)["__REDUX_DEVTOOLS_EXTENSION__"];

export const store = createStore(rootReducer, AppInitialState, devtools && devtools());
