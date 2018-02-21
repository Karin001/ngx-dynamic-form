import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetDirective } from './greet.directive';
import { EmitFocusBlurDirective } from './emit-focus-blur.directive';
import { ServiceFocusBlurService } from './service-focus-blur.service';
import { EmitClickDirective } from './emit-click.directive';
import { SlaveDirective } from './slave.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GreetDirective, EmitFocusBlurDirective, EmitClickDirective, SlaveDirective],
  exports: [GreetDirective, EmitFocusBlurDirective, EmitClickDirective, SlaveDirective],
  providers: [ServiceFocusBlurService]
})
export class DirectiveModule { }
