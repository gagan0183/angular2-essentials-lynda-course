import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MediaItemService {
  constructor(private http: Http) {}

  get(medium) {
    let searchParams = new URLSearchParams();
    searchParams.append('medium', medium);
    return this.http.get('mediaItems', {search: searchParams})
      .map(response => {
        return response.json().mediaItems;
      });
  }

  add(mediaItem) {
    return this.http.post('mediaItems', mediaItem).map(response => {});
  }

  delete(mediaItem) {
    return this.http.delete(`mediaItems/${mediaItem.id}`).map(response => {});
  }
}
