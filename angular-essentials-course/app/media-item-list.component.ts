import { Component } from '@angular/core';
import { MediaItemService } from './media-item.service';

@Component({
  selector: 'media-item-list',
  templateUrl: 'app/media-item-list.component.html',
  styleUrls: ['app/media-item-list.component.css']
})

export class MediaItemListComponent {
  mediaItems;

  onMediaItemDelete(mediaItem) {
    this.mediaItemService.delete(mediaItem);
  }

  constructor(private mediaItemService: MediaItemService) {

  }

  ngOnInit() {
    this.mediaItems = this.mediaItemService.get();
  }
}
