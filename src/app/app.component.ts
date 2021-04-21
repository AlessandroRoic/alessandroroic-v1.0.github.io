import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public showArrow: boolean;
  public showSideBar: boolean;
  title = 'Alessandro Roic';

  ngOnInit(): void {
    this.showArrow = false;
  }

  @HostListener('window:scroll', [])
  onScrollActivateArrow(): void {
    const scrollLength = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollLength > 100) {
      this.showArrow = true;
    } else if (this.showArrow && scrollLength < 10) {
      this.showArrow = false;
    }
  }

  goBackTop(): void {
    window.scrollTo(0, 0);
    this.showArrow = false;
  }

  reloadPage(): void {
    window.location.reload();
  }
}
