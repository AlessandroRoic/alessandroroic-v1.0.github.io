import { Component, Input } from '@angular/core';
import { fadeInGrow, item } from '../../animations/fade-animations';
import UtilsService from '../../services/utils.service';

@Component({
  selector: 'app-social-medias',
  templateUrl: './social-medias.component.html',
  styleUrls: ['./social-medias.component.scss'],
  animations: [item, fadeInGrow],
})
export default class SocialMediasComponent {
  @Input() isFooter: boolean;

  constructor(private utils: UtilsService) {}

  public openSite(siteUrl: string): void {
    this.utils.openSite(siteUrl);
  }
}
