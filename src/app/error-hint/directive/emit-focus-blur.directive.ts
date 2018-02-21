import { Directive, HostListener, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ServiceFocusBlurService } from './service-focus-blur.service';
import { FormControl } from '@angular/forms';
@Directive({
  selector: '[appEmitFocusBlur]'
})
export class EmitFocusBlurDirective {
  @Input('appEmitFocusBlur')
  origin: FormControl;
  constructor(
    private service: ServiceFocusBlurService
  ) { }
  @HostListener('focus', ['$event'])
  postFocus(ev: Event) {
    this.service.postFocus(this.origin);
  }
  @HostListener('blur', ['$event'])
  postBlur(ev: Event) {
    this.service.postBlur(this.origin);
  }

}
