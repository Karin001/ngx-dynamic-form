import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DynamicFormModule} from './dynamic-form/dynamic-form.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DynamicFormModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
