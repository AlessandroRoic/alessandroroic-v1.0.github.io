import {createAction} from '@ngrx/store';
import {Action} from '../enums/action.enum';

export const openSideBar = createAction(Action.SIDEBAR_OPENED);

export const closeSideBar = createAction(Action.SIDEBAR_CLOSED);
