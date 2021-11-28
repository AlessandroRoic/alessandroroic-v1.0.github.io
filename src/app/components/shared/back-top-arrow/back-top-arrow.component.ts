import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import UtilsService from 'src/app/services/utils.service';
import { item } from '../../../animations/fade.animation';
import { getPageScrolled } from '../../../store/selectors/ui-store.selector';
import AppState from '../../../store/interfaces/app-state';

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
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  goBackTop(): void {
    this.utils.scrollTop();
  }
}
