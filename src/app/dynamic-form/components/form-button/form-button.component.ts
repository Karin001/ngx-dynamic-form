import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { FieldConfig } from '../../interface/fieldConfig';
@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.scss']
})
export class FormButtonComponent implements OnInit {
  group: FormGroup;
  config: FieldConfig;
  constructor() { }

  ngOnInit() {
  }

}
