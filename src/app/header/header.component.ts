import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() pageIndexEvent = new EventEmitter();

  ngOnInit() {
  }

  setPage(pageIndex) {
    this.pageIndexEvent.emit(pageIndex);
  }
}
