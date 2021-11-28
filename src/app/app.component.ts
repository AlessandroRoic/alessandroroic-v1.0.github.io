import { Component, OnInit } from '@angular/core';
import ScrollService from './services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent implements OnInit {
  title = 'Alessandro Roic';

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.scrollService.manageScroll();
  }
}
