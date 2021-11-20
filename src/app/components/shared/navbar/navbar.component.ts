import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/interfaces/app-state';
import UtilsService from '../../../services/utils.service';
import { getPageScrolled, getSideNavOpened } from '../../../store/selectors/ui-store.selector';
import { toggleSideNav } from '../../../store/actions/sidenav.action';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export default class NavbarComponent implements OnInit {
  isScrolled$: Observable<boolean>;
  sideNavOpened$: Observable<boolean>;

  constructor(private store$: Store<AppState>, private utils: UtilsService) {}

  ngOnInit(): void {
    this.sideNavOpened$ = this.store$.select(getSideNavOpened);
    this.isScrolled$ = this.store$.select(getPageScrolled);
  }

  reloadPage(): void {
    this.utils.reloadPage();
  }

  showSideNav(): void {
    this.store$.dispatch(toggleSideNav({ sideNavOpened: true }));
  }
}
