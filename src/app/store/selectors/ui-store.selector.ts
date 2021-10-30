import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {AppState} from '../interfaces/app-state';
import {UIStore} from '../interfaces/ui-store';

export const UIStoreKey = 'UIStore';

const getUIStore = createFeatureSelector<AppState, UIStore>(UIStoreKey);

export const getSideNavOpened: MemoizedSelector<AppState, boolean> = createSelector(
  getUIStore,
  (state: UIStore): boolean => (state.sideNavOpened),
);
