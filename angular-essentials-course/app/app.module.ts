import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { MediaItemFormComponent } from './media-item-form.component';
import { AppComponent } from  './app.component';
import { MediaItemComponent } from  './media.component';
import { MediaItemListComponent } from './media-item-list.component';
import { list, lists } from './providers';
import {FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { MediaItemService } from './media-item.service';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations:[
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    MediaItemFormComponent
  ],
  providers: [
    MediaItemService,
    {provide: list, useValue: lists} 
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}
