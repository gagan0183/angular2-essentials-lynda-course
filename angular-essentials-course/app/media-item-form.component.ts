import { Component, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MediaItemService } from './media-item.service';
import { list } from './providers';

@Component({
    selector: 'mw-media-item-form',
    templateUrl: 'app/media-item-form.component.html',
    styleUrls: ['app/media-item-form.component.css']
})
export class MediaItemFormComponent {
  form;

  constructor(private formBuilder: FormBuilder, private mediaItemService: MediaItemService, @Inject(list) public list) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      medium: this.formBuilder.control('Movies'),
      name: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern("[\\w\\-\\s\\/]+")
      ])),
      category: this.formBuilder.control(''),
      year: this.formBuilder.control('', this.yearValidator)
    });
  }

  onSubmit(mediaItem) {
    this.mediaItemService.add(mediaItem);
  }

  yearValidator(control) {
    if(control.value.trim().length === 0) {
      return null;
    }
    let minvalue = 1900;
    let maxvalue = 2100;
    if(control.value >= minvalue && control.value <= maxvalue) {
      return null;
    } else {
      return { 'year' : {
        min: minvalue,
        max: maxvalue
      }};
    }
  }
}
