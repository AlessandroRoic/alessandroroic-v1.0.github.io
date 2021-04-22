import {Action, createReducer, on} from '@ngrx/store';
import {closeSideNav, openSideNav} from '../actions/sidenav.action';
import {LocalStore} from '../interfaces/local-store';

const initialState: LocalStore = {
  sideNavOpened: false
};

const _sideBarReducer = createReducer(
  initialState,
  on(openSideNav, (state) => ({
    ...state,
    sideNavOpened: true
  })),
  on(closeSideNav, (state) => ({
    ...state,
    sideNavOpened: false
  })),
);

export function localStoreReducer(state: LocalStore = initialState, action: Action): LocalStore {
  return _sideBarReducer(state, action);
}
