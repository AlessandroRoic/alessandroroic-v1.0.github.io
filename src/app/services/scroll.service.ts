import { Injectable, OnDestroy } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { fromEvent, Subject } from 'rxjs';
import { distinctUntilChanged, map, pairwise, takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { ScrollDirection } from '../components/shared/enums/scroll-direction';
import { PageScroll } from '../store/models/page-scroll';
import { setPageScrolled } from '../store/actions/sidenav.action';
import AppState from '../store/interfaces/app-state';

@Injectable({
  providedIn: 'root',
})
export default class ScrollService implements OnDestroy {
  private onDestroy$: Subject<void> = new Subject();
  constructor(private store$: Store<AppState>, private viewPortScroller: ViewportScroller) {}

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  manageScroll(): void {
    fromEvent(window, 'scroll')
      .pipe(
        map(() => this.viewPortScroller.getScrollPosition()),
        pairwise(),
        map(
          ([oldValue, newValue]: [[number, number], [number, number]]): PageScroll => ({
            scrolled: newValue[1] > 200,
            direction: oldValue[1] - newValue[1] > 0 ? ScrollDirection.DOWN : ScrollDirection.UP,
          }),
        ),
        distinctUntilChanged(),
        takeUntil(this.onDestroy$),
      )
      .subscribe((pageScroll: PageScroll) => {
        this.store$.dispatch(setPageScrolled({ pageScroll }));
      });
  }
}
