import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class UtilsService {

  reloadPage(): void {
    window.location.reload();
  }

  openSite(siteUrl: string): void {
    window.open(`https://${siteUrl}`, '_blank');
  }

  downloadCv(): void {
    window.open('/assets/documents/RoicAlessandroCV.pdf', '_blank');
  }

  scrollTop(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
