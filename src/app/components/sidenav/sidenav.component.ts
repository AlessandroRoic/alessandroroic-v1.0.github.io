import {Component, OnDestroy, OnInit} from '@angular/core';
import {fadeInGrow, item} from '../../animations/fade-animations';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {closeSideNav} from '../../store/actions/sidenav.action';
import {AppState} from '../../store/interfaces/app-state';
import {getSideNavOpened} from '../../store/selectors/local-store.selector';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [fadeInGrow, item]
})
export class SidenavComponent implements OnInit, OnDestroy {

  public sideNavOpened: boolean;
  public duration = 0.25;
  private direction = 'right';
  private subs: Subscription[] = [];

  get navWidth(): number {
    return window.visualViewport.width / 3;
  }

  constructor(private store$: Store<AppState>) {
  }

  ngOnInit(): void {
    this.subs = [
      ...this.subs,
      this.store$.select(getSideNavOpened).subscribe((sideNavOpened: boolean) => this.sideNavOpened = sideNavOpened)
    ];
  }

  ngOnDestroy(): void {
    this.subs.forEach((s: Subscription) => s.unsubscribe());
  }

  closeSideNav(): void {
    this.store$.dispatch(closeSideNav());
  }

  getSideNavBarStyle(showNav?: boolean): any {
    const navBarStyle: any = {};

    navBarStyle.transition = this.direction + ' ' + this.duration + 's, visibility ' + this.duration + 's';
    navBarStyle.width = this.navWidth + 'px';
    navBarStyle[this.direction] = (showNav ? 0 : (this.navWidth * -1)) + 'px';

    return navBarStyle;
  }

}
