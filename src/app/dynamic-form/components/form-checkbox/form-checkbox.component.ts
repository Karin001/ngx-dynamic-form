import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../interface/fieldConfig';
import { CheckboxValuePosterService } from '../../service/checkbox-value-poster.service';
@Component({
  selector: 'app-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.scss']
})
export class FormCheckboxComponent implements OnInit {
  group: FormGroup;
  config: FieldConfig;
  checkboxVal = [];
  checkboxValObj = {};
  constructor(private service: CheckboxValuePosterService) { }

  ngOnInit() {
  }
  pushValue(check, item) {
    const haveItem = this.checkboxVal.includes(item);
    if (check) {
      if (!haveItem) {
        this.checkboxVal.push(item);
      }
    } else {
      if (haveItem) {
        this.checkboxVal = this.checkboxVal.filter((ele) => {
          return ele !== item;
        });
      }
    }
    this.checkboxValObj[this.config.name] = this.checkboxVal;
    this.service.postValue(this.checkboxValObj);


  }
}
