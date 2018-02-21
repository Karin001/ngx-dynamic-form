import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FieldConfig } from '../../interface/fieldConfig';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import { CheckboxValuePosterService } from '../../service/checkbox-value-poster.service';
import { formsPool } from '../../../formsPool';
import { element } from 'protractor';
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, OnChanges {
  @Input()
  configs: FieldConfig[];
  @Output()
  submit = new EventEmitter<any>();
  get controlConfigs() { return this.configs.filter(item => item.type !== 'button'); }
  get value() { return this.form.value; }
  get valid() { return this.form.valid; }
  get changes(): Observable<any> { return this.form.valueChanges; }
  form: FormGroup;


  constructor(private fb: FormBuilder,
    private service: CheckboxValuePosterService
  ) {
  }

  ngOnInit() {
    this.form = this.creatForm();

  }
  ngOnChanges() {
    console.log(1);
    if (this.form) {
      this.service.clearValue();
      const settedControls = Object.keys(this.form['controls']);
      const controlToSet = this.controlConfigs.map(item => item.name);
      settedControls
        .filter(controlName => !controlToSet.includes(controlName))
        .forEach(controlName => {
          this.form.removeControl(controlName);
        });
      controlToSet
        .filter(controlName => !settedControls.includes(controlName))
        .forEach(controlName => {
          const config = this.controlConfigs.find(item => item.name === controlName);
          this.form.addControl(controlName, this.creatControl(config));
        });
    }

  }
  creatForm(): FormGroup {
    const form = this.fb.group({});
    this.controlConfigs.forEach(config => {
      form.addControl(config.name, this.creatControl(config));
    });
    return form;
  }
  creatControl(fieldConfig: FieldConfig) {
    const { disabled, value, validations } = fieldConfig;
    return this.fb.control({ disabled, value }, validations);
  }
  handleSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.service.getValue().take(1).subscribe(val => this.submit.emit({
      valid: this.valid,
      formVal: this.value,
      checkboxVal: val
    }));

  }
  setDisabled(name: string, disable: boolean) {
    if (this.form.controls[name]) {
      const method = disable ? 'disable' : 'enable';
      this.form.controls[name][method]();
      return;
    }
    this.configs.forEach(item => {
      if (item.name === name) {
        item.disabled = disable;
      }
    });
  }
  setValue(name: string, value: any) {
    this.form.controls[name].setValue(value);
  }

}
