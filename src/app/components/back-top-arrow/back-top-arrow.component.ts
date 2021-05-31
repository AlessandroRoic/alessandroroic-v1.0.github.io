import {Component, Input, OnInit} from '@angular/core';
import {item} from '../../animations/fade-animations';

@Component({
  selector: 'app-back-top-arrow',
  templateUrl: './back-top-arrow.component.html',
  styleUrls: ['./back-top-arrow.component.scss'],
  animations: [item]
})
export class BackTopArrowComponent implements OnInit {

  @Input() isScrolled: boolean;

  get showButtonArrow(): boolean {
    return this.isScrolled;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  goBackTop(): void {
    window.scrollTo(0, 0);
    this.isScrolled = false;
  }
}
