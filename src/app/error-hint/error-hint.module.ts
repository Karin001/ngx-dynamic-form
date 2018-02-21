import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DirectiveModule} from './directive/directive.module';
import {HintComponent} from './hint/hint.component'
@NgModule({
  imports: [
    CommonModule,
    DirectiveModule,
  ],
  declarations: [HintComponent],
  exports:[HintComponent,DirectiveModule]
})
export class ErrorHintModule { }
