import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import AppState from '../interfaces/app-state';
import UIStore from '../interfaces/ui-store';
import { PageScroll } from '../models/page-scroll';

export const UIStoreKey = 'UIStore';

const getUIStore = createFeatureSelector<AppState, UIStore>(UIStoreKey);

export const getSideNavOpened: MemoizedSelector<AppState, boolean> = createSelector(
  getUIStore,
  (state: UIStore): boolean => state.sideNavOpened,
);

export const getPageScrolled: MemoizedSelector<AppState, boolean> = createSelector(
  getUIStore,
  (state: UIStore): boolean => state.pageScroll.scrolled,
);

export const getPageScroll: MemoizedSelector<AppState, PageScroll> = createSelector(
  getUIStore,
  (state: UIStore): PageScroll => state.pageScroll,
);
