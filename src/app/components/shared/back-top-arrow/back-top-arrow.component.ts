import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, map, takeUntil } from 'rxjs/operators';
import UtilsService from 'src/app/services/utils.service';
import { item } from '../../../animations/fade.animation';
import { getPageScrolled } from '../../../store/selectors/ui-store.selector';
import { AppState } from '../../../store/interfaces/app-state';
import { setPageScrolled } from '../../../store/actions/sidenav.action';

@Component({
  selector: 'app-back-top-arrow',
  templateUrl: './back-top-arrow.component.html',
  styleUrls: ['./back-top-arrow.component.scss'],
  animations: [item],
})
export default class BackTopArrowComponent implements OnInit, OnDestroy {
  isScrolled$: Observable<boolean>;
  private onDestroy$: Subject<void> = new Subject();

  constructor(private store$: Store<AppState>, private utils: UtilsService) {}

  ngOnInit(): void {
    this.isScrolled$ = this.store$.select(getPageScrolled);
    fromEvent(window, 'scroll')
      .pipe(
        map(() => (window.pageYOffset || document.documentElement.scrollTop) > 200),
        distinctUntilChanged(),
        takeUntil(this.onDestroy$),
      )
      .subscribe((pageScrolled: boolean) => {
        this.store$.dispatch(setPageScrolled({ pageScrolled }));
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  goBackTop(): void {
    this.utils.scrollTop();
  }
}
