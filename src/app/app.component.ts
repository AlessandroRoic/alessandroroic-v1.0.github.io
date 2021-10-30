import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  isScrolled: boolean;

  title = 'Alessandro Roic';

  @HostListener('window:scroll', [])
  onScrollActivateArrow(): void {
    const scrollLength: number = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrolled = scrollLength > 50;
  }
}
