import {Action, createReducer, on} from '@ngrx/store';
import UIStore from '../interfaces/ui-store';
import {setPageScrolled, toggleSideNav} from '../actions/sidenav.action';
import {ScrollDirection} from '../../components/shared/enums/scroll-direction';
import {PageScroll} from '../models/page-scroll';

const initialState: UIStore = {
  sideNavOpened: false,
  pageScroll: {
    scrolled: false,
    direction: ScrollDirection.DOWN,
  },
};

const manageToggleSideNav = (state: UIStore, {sideNavOpened}: { sideNavOpened: boolean }) => ({
  ...state,
  sideNavOpened,
});

const managePageScrolled = (state: UIStore, {pageScroll}: { pageScroll: PageScroll }): UIStore => ({
  ...state,
  pageScroll,
});

const sideBarReducer = createReducer(
  initialState,
  on(toggleSideNav, manageToggleSideNav),
  on(setPageScrolled, managePageScrolled)
);

export default function UIStoreReducer(state: UIStore = initialState, action: Action): UIStore {
  return sideBarReducer(state, action);
}
