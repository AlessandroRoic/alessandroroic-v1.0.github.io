import { Component, Input, OnInit } from '@angular/core';
import UtilsService from '../../../services/utils.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export default class CarouselComponent implements OnInit {
  @Input() slides: string[];

  public currentSlide = 0;

  constructor(private utils: UtilsService) {}

  ngOnInit(): void {}

  openSite(url: string): void {
    this.utils.openSite(url);
  }
}
