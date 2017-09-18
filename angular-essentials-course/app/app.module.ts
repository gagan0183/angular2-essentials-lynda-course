import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpModule, XHRBackend} from '@angular/http';

import { MediaItemFormComponent } from './media-item-form.component';
import { AppComponent } from  './app.component';
import { routing } from './app.routing';
import { MediaItemComponent } from  './media.component';
import { MediaItemListComponent } from './media-item-list.component';
import { list, lists } from './providers';
import {FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { MockXHRBackend } from './mock-xhr-backend';
import { MediaItemService } from './media-item.service';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    routing
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
    {provide: list, useValue: lists},
    {provide: XHRBackend, useClass:MockXHRBackend}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}
