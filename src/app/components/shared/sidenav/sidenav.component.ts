import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { closeSideNav } from 'src/app/store/actions/sidenav.action';
import { takeUntil } from 'rxjs/operators';
import { fadeInGrow, item } from '../../../animations/fade-animations';
import { overlayFade, sideNav, sideNavSlide } from '../../../animations/slide-animations';
import { AppState } from '../../../store/interfaces/app-state';
import { getSideNavOpened } from '../../../store/selectors/ui-store.selector';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [fadeInGrow, item, sideNavSlide, overlayFade, sideNav],
})
export default class SidenavComponent implements OnInit, OnDestroy {
  sideNavOpened: boolean;

  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(private store$: Store<AppState>) {}

  ngOnInit(): void {
    this.store$
      .select(getSideNavOpened)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((sideNavOpened: boolean) => {
        this.sideNavOpened = sideNavOpened;
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  closeSideNav(): void {
    this.store$.dispatch(closeSideNav());
  }
}
