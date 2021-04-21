import {Component, Input, OnInit} from '@angular/core';
import {fadeInGrow, item} from '../../animations/fade-animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [fadeInGrow, item]
})
export class SidebarComponent implements OnInit {

  @Input() showSideNav: boolean;
  public navWidth: number = window.innerWidth / 4;
  public duration = 0.25;
  private direction = 'right';
  constructor() {}

  ngOnInit(): void {
    this.showSideNav = false;
  }

  onSidebarClose() {
    this.showSideNav = false;
  }

  getSideNavBarStyle(showNav: boolean) {
    const navBarStyle: any = {};

    navBarStyle.transition = this.direction + ' ' + this.duration + 's, visibility ' + this.duration + 's';
    navBarStyle.width = this.navWidth + 'px';
    navBarStyle[this.direction] = (showNav ? 0 : (this.navWidth * -1)) + 'px';

    return navBarStyle;
  }

}
