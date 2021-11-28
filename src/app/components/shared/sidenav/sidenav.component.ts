import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { fadeInGrow, item } from '../../../animations/fade.animation';
import { overlayFade, sideNav, sideNavSlide } from '../../../animations/slide.animation';
import AppState from '../../../store/interfaces/app-state';
import { getSideNavOpened } from '../../../store/selectors/ui-store.selector';
import { toggleSideNav } from '../../../store/actions/sidenav.action';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [fadeInGrow, item, sideNavSlide, overlayFade, sideNav],
})
export default class SidenavComponent implements OnInit, OnDestroy {
  sideNavOpened$: Observable<boolean>;
  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(private store$: Store<AppState>) {}

  ngOnInit(): void {
    this.sideNavOpened$ = this.store$.select(getSideNavOpened);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  closeSideNav(): void {
    this.store$.dispatch(toggleSideNav({ sideNavOpened: false }));
  }
}
