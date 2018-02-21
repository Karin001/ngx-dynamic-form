import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../interface/fieldConfig';
@Component({
  selector: 'app-form-radio',
  templateUrl: './form-radio.component.html',
  styleUrls: ['./form-radio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormRadioComponent implements OnInit {
  group: FormGroup;
  config: FieldConfig;
  constructor() { }

  ngOnInit() {
  }

}
