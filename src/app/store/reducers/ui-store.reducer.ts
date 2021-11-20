import {Action, createReducer, on} from '@ngrx/store';
import {UIStore} from '../interfaces/ui-store';
import {setPageScrolled, toggleSideNav} from '../actions/sidenav.action';

const initialState: UIStore = {
  sideNavOpened: false,
  pageScrolled: false
};

const manageToggleSideNav = (state: UIStore, {sideNavOpened}: { sideNavOpened: boolean }) => ({
  ...state,
  sideNavOpened,
});

const managePageScrolled = (state: UIStore, {pageScrolled}: { pageScrolled: boolean }) => ({
  ...state,
  pageScrolled,
});

const sideBarReducer = createReducer(
  initialState,
  on(toggleSideNav, manageToggleSideNav),
  on(setPageScrolled, managePageScrolled)
);

export function UIStoreReducer(state: UIStore = initialState, action: Action): UIStore {
  return sideBarReducer(state, action);
}
