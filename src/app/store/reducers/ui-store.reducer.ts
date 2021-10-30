import {Action, createReducer, on} from '@ngrx/store';
import {closeSideNav, openSideNav} from '../actions/sidenav.action';
import {UIStore} from '../interfaces/ui-store';

const initialState: UIStore = {
  sideNavOpened: false,
};

const sideBarReducer = createReducer(
  initialState,
  on(openSideNav, (state) => ({
    ...state,
    sideNavOpened: true,
  })),
  on(closeSideNav, (state) => ({
    ...state,
    sideNavOpened: false,
  })),
);

export function UIStoreReducer(state: UIStore = initialState, action: Action): UIStore {
  return sideBarReducer(state, action);
}
