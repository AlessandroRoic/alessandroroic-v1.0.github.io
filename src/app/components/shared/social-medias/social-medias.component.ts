import { Component, Input } from '@angular/core';
import UtilsService from '../../../services/utils.service';
import { fadeInGrow, item } from '../../../animations/fade.animation';

@Component({
  selector: 'app-social-medias',
  templateUrl: './social-medias.component.html',
  styleUrls: ['./social-medias.component.scss'],
  animations: [item, fadeInGrow],
})
export default class SocialMediasComponent {
  @Input() isFooter: boolean;

  constructor(private utils: UtilsService) {}

  openSite(siteUrl: string): void {
    this.utils.openSite(siteUrl);
  }

  downloadCv(): void {
    this.utils.downloadCv();
  }
}
