import { Directive, HostListener, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ServiceFocusBlurService } from './service-focus-blur.service';
import { FormControl } from '@angular/forms';
@Directive({
  selector: '[appEmitClick]'
})
export class EmitClickDirective {

  constructor(
    private service: ServiceFocusBlurService
  ) { }
  @HostListener('click', ['$event'])
  postClick(ev: Event) {
    this.service.postClick('click');
    console.log('click');
  }
}
