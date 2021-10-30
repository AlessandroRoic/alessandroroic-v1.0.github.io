import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { AppState } from '../../../store/interfaces/app-state';
import UtilsService from '../../../services/utils.service';
import { getSideNavOpened } from '../../../store/selectors/ui-store.selector';
import { openSideNav } from '../../../store/actions/sidenav.action';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export default class NavbarComponent implements OnInit, OnDestroy {
  @Input() isScrolled: boolean;

  sideNavOpened = false;

  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(private store$: Store<AppState>, private utils: UtilsService) {}

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

  reloadPage(): void {
    this.utils.reloadPage();
  }

  showSideNav(): void {
    this.store$.dispatch(openSideNav());
  }
}
