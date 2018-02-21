import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { FieldConfig } from '../../interface/fieldConfig';
@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent implements OnInit {
  group: FormGroup;
  config: FieldConfig;
  constructor() { }

  ngOnInit() {
  }

}
