import {createReducer, on} from '@ngrx/store';
import {closeSideBar, openSideBar} from '../actions/sidebar.action';
import {Store} from '../store';
import {Action} from '../enums/action.enum';

const initialState: Store = {
  sideBarOpened: false
};

const _sideBarReducer = createReducer(
  initialState,
  // on(Action.SIDEBAR_OPENED, (state) => ({...state, sideBarOpened: true})),
  // on(Action.SIDEBAR_CLOSED, (state) => ({...state, sideBarOpened: false})),
);

// tslint:disable-next-line:typedef
export function sideBarReducer(state, action) {
  return _sideBarReducer(state, action);
}
