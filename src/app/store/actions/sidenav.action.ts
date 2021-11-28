import { createAction, props } from '@ngrx/store';
import { Action } from '../enums/ui-action.enum';
import { PageScroll } from '../models/page-scroll';

export const toggleSideNav = createAction(Action.SIDE_NAV_TOGGLE, props<{ sideNavOpened: boolean }>());

export const setPageScrolled = createAction(Action.PAGE_SCROLLED, props<{ pageScroll: PageScroll }>());
