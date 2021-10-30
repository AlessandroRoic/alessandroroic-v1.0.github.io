import {createAction} from '@ngrx/store';
import {Action} from '../enums/ui-action.enum';

export const openSideNav = createAction(Action.SIDE_NAV_OPENED);

export const closeSideNav = createAction(Action.SIDE_NAV_CLOSED);
