import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {openSideNav} from './store/actions/sidenav.action';
import {AppState} from './store/interfaces/app-state';
import {getSideNavOpened} from './store/selectors/local-store.selector';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public isScrolled: boolean;
  public title = 'Alessandro Roic';
  public sideNavOpened: boolean;
  private subs: Subscription[] = [];

  get showButtonArrow(): boolean {
    return this.isScrolled && !this.sideNavOpened;
  }

  constructor(private store$: Store<AppState>) {
  }

  ngOnInit(): void {
    this.isScrolled = false;
    this.subs = [
      ...this.subs,
      this.store$.select(getSideNavOpened).subscribe((sideNavOpened: boolean) => this.sideNavOpened = sideNavOpened)
    ];
  }

  ngOnDestroy(): void {
    this.subs.forEach((s: Subscription) => s.unsubscribe());
  }

  @HostListener('window:scroll', [])
  onScrollActivateArrow(): void {
    const scrollLength = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrolled = scrollLength > 50;
  }

  goBackTop(): void {
    window.scrollTo(0, 0);
    this.isScrolled = false;
  }

  reloadPage(): void {
    window.location.reload();
  }

  showSideNav(): void {
    this.store$.dispatch(openSideNav());
  }
}
