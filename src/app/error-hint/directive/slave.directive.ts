import { Directive, Input, Attribute, Renderer2, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { ServiceFocusBlurService } from './service-focus-blur.service';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/concat';
import { Subscription } from 'rxjs/Subscription';
import { error } from 'util';
export class ChangeClasses {
  hintMode: string;
  okMode: string;
  alertMode: string;
}

@Directive({
  selector: '[appSlave][changeClasses][errorCode]'
})
export class SlaveDirective implements OnDestroy,AfterViewInit {
  @Input()
  changeClasses: ChangeClasses;
  @Input('appSlave')
  master: FormControl;
  @Input()
  errorCode: string;
  hint_or_ok$: Subscription;
  alert$: Subscription;
  constructor(

    private service: ServiceFocusBlurService,
    private el: ElementRef,
    private rd: Renderer2
  ) {
    console.log('11' + this.errorCode);
    this.rd.setStyle(this.el.nativeElement, 'display', 'none');

  }
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.chargeHint_or_OkMode();
    this.chargeAlertMode();

  }
  ngOnDestroy() {
    this.alert$.unsubscribe();
    this.hint_or_ok$.unsubscribe();
  }
  chargeHint_or_OkMode() {
    this.hint_or_ok$ = this.service.getFocus()
      .filter(fc => fc === this.master)
      .merge(this.master.valueChanges)
      .subscribe(e => {
        if (this.master.hasError(this.errorCode)) {
          this.rd.removeClass(this.el.nativeElement, this.changeClasses.alertMode);
          this.rd.removeClass(this.el.nativeElement, this.changeClasses.okMode);
          this.rd.setStyle(this.el.nativeElement, 'display', 'flex');
          this.rd.addClass(this.el.nativeElement, this.changeClasses.hintMode);
        } else {
          this.rd.removeClass(this.el.nativeElement, this.changeClasses.alertMode);
          this.rd.removeClass(this.el.nativeElement, this.changeClasses.hintMode);
          this.rd.setStyle(this.el.nativeElement, 'display', 'flex');
          this.rd.addClass(this.el.nativeElement, this.changeClasses.okMode);
        }

      });
  }
  chargeAlertMode() {
    this.alert$ = this.service.getBlur()
      .filter(fc => fc === this.master)
      .merge(this.service.getClick())
      .subscribe(fc => {
        if (this.master.hasError(this.errorCode)) {
          this.rd.setStyle(this.el.nativeElement, 'display', 'flex');
          this.rd.removeClass(this.el.nativeElement, this.changeClasses.okMode);
          this.rd.removeClass(this.el.nativeElement, this.changeClasses.hintMode);
          this.rd.addClass(this.el.nativeElement, this.changeClasses.alertMode);
        } else {
          this.rd.setStyle(this.el.nativeElement, 'animation', 'myfirst2');
          this.rd.setStyle(this.el.nativeElement, 'display', 'none');

        }

      });
  }

}
