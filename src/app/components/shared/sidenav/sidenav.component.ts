import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { closeSideNav } from 'src/app/store/actions/sidenav.action';
import { fadeInGrow, item } from '../../../animations/fade-animations';
import { overlayFade, sideNav, sideNavSlide } from '../../../animations/slide-animations';
import { AppState } from '../../../store/interfaces/app-state';
import { getSideNavOpened } from '../../../store/selectors/local-store.selector';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [fadeInGrow, item, sideNavSlide, overlayFade, sideNav],
})
export default class SidenavComponent implements OnInit, OnDestroy {
  public sideNavOpened: boolean;

  private subs: Subscription[] = [];

  constructor(private store$: Store<AppState>) {}

  public ngOnInit(): void {
    this.subs = [
      ...this.subs,
      this.store$.select(getSideNavOpened).subscribe((sideNavOpened: boolean) => {
        this.sideNavOpened = sideNavOpened;
      }),
    ];
  }

  public ngOnDestroy(): void {
    this.subs.forEach((s: Subscription) => s.unsubscribe());
  }

  public closeSideNav(): void {
    this.store$.dispatch(closeSideNav());
  }
}
