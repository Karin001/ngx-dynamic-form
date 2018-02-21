import { Component, ViewChild, AfterViewInit, ChangeDetectorRef, OnChanges, ViewEncapsulation } from '@angular/core';
import { DynamicFormComponent } from './dynamic-form/container/dynamic-form/dynamic-form.component';
import { Validators } from '@angular/forms';
import { FieldConfig } from './dynamic-form/interface/fieldConfig';
import { formsPool } from './formsPool';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  @ViewChild('dynamicForm')
  dynamicForm: DynamicFormComponent;
  formsCanBeSelect = [
    'food', 'music', 'movie'
  ];
  formFieldConfigs = formsPool['food'];
  constructor(private cdr: ChangeDetectorRef) {

  }
  onSubmit(event) {
    console.log(event);
  }
  ngAfterViewInit() {
    console.log(3);
    let previousValid = this.dynamicForm.valid;
    this.dynamicForm.changes
      .subscribe(val => {
        if (previousValid !== this.dynamicForm.valid) {
          previousValid = this.dynamicForm.valid;
          this.dynamicForm.setDisabled('submit', !previousValid);
        }
      });
      setTimeout(() => {
        this.dynamicForm.setDisabled('submit', true);
      });

  }

  changeForm(formType) {
    this.formFieldConfigs = formsPool[formType];
    this.dynamicForm.setDisabled('submit', true);
  }
}
