import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import AppState from '../../../store/interfaces/app-state';
import UtilsService from '../../../services/utils.service';
import { getPageScroll, getSideNavOpened } from '../../../store/selectors/ui-store.selector';
import { toggleSideNav } from '../../../store/actions/sidenav.action';
import { PageScroll } from '../../../store/models/page-scroll';
import { ScrollDirection } from '../enums/scroll-direction';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export default class NavbarComponent implements OnInit {
  scrollPage$: Observable<PageScroll>;
  sideNavOpened$: Observable<boolean>;
  scrollDirection = ScrollDirection;

  constructor(private store$: Store<AppState>, private utils: UtilsService) {}

  ngOnInit(): void {
    this.sideNavOpened$ = this.store$.select(getSideNavOpened);
    this.scrollPage$ = this.store$.select(getPageScroll);
  }

  reloadPage(): void {
    this.utils.reloadPage();
  }

  showSideNav(): void {
    this.store$.dispatch(toggleSideNav({ sideNavOpened: true }));
  }
}
