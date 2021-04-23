import {Component, OnDestroy, OnInit} from '@angular/core';
import {fadeInGrow, item} from '../../animations/fade-animations';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {closeSideNav} from '../../store/actions/sidenav.action';
import {AppState} from '../../store/interfaces/app-state';
import {getSideNavOpened} from '../../store/selectors/local-store.selector';
import {overlayFade, sideNav, sideNavSlide} from '../../animations/slide-in-animation';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [fadeInGrow, item, sideNavSlide, overlayFade, sideNav]
})
export class SidenavComponent implements OnInit, OnDestroy {

  public sideNavOpened: boolean;
  private subs: Subscription[] = [];
  private sideNavState: string;

  get sideNavAnimationState(): string {
    return this.sideNavState === 'out' ? 'in' : 'out';
  }

  constructor(private store$: Store<AppState>) {
  }

  ngOnInit(): void {
    this.sideNavState = 'out';
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

}
