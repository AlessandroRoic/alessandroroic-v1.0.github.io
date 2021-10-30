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
}
