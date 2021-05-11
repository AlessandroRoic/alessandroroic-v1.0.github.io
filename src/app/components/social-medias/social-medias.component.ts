import {Component, Input, OnInit} from '@angular/core';
import {fadeInGrow, item} from '../../animations/fade-animations';

@Component({
  selector: 'app-social-medias',
  templateUrl: './social-medias.component.html',
  styleUrls: ['./social-medias.component.scss'],
  animations: [item, fadeInGrow]
})
export class SocialMediasComponent implements OnInit {

  @Input() isFooter: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
