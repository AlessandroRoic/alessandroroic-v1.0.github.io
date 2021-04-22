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
  public showArrow: boolean;
  public title = 'Alessandro Roic';
  public sideNavOpened: boolean;
  private subs: Subscription[] = [];

  get showButtonArrow(): boolean {
    return this.showArrow && !this.sideNavOpened;
  }

  constructor(private store$: Store<AppState>) {
  }

  ngOnInit(): void {
    this.showArrow = false;
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
    if (scrollLength > 100) {
      this.showArrow = true;
    } else if (this.showArrow && scrollLength < 10) {
      this.showArrow = false;
    }
  }

  goBackTop(): void {
    window.scrollTo(0, 0);
    this.showArrow = false;
  }

  reloadPage(): void {
    window.location.reload();
  }

  showSideNav(): void {
    this.store$.dispatch(openSideNav());
  }
}
