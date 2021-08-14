import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { openSideNav } from './store/actions/sidenav.action';
import { AppState } from './store/interfaces/app-state';
import { getSideNavOpened } from './store/selectors/local-store.selector';
import UtilsService from './services/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent implements OnInit, OnDestroy {
  public isScrolled: boolean;

  public title = 'Alessandro Roic';

  public sideNavOpened: boolean;

  private subs: Subscription[] = [];

  constructor(private store$: Store<AppState>, private utils: UtilsService) {}

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

  public reloadPage(): void {
    this.utils.reloadPage();
  }

  public showSideNav(): void {
    this.store$.dispatch(openSideNav());
  }

  @HostListener('window:scroll', [])
  public onScrollActivateArrow(): void {
    const scrollLength: number = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrolled = scrollLength > 50;
  }
}
