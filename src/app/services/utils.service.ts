import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class UtilsService {

  public reloadPage(): void {
    window.location.reload();
  }

  public openSite(siteUrl: string): void {
    window.open(`https://${siteUrl}`, '_blank');
  }
}
