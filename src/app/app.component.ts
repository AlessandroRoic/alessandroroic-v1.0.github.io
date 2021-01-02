import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageIndex = 0;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Alessandro Roic');
  }

  changePageIndex(newPageIndex: number) {
    this.pageIndex = newPageIndex;
  }
}
