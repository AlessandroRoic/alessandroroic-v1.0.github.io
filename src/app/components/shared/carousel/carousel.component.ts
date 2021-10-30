import { Component, Input } from '@angular/core';
import UtilsService from '../../../services/utils.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export default class CarouselComponent {
  @Input() slides: string[];

  currentSlide = 0;

  constructor(private utils: UtilsService) {}

  openSite(url: string): void {
    this.utils.openSite(url);
  }
}
