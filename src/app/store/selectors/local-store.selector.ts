import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {AppState} from '../interfaces/app-state';
import {LocalStore} from '../interfaces/local-store';

export const localStoreKey = 'localStore';

const getLocalStore = createFeatureSelector<AppState, LocalStore>(localStoreKey);

export const getSideNavOpened: MemoizedSelector<AppState, boolean> = createSelector(
  getLocalStore,
  (state: LocalStore): boolean => state.sideNavOpened,
);
