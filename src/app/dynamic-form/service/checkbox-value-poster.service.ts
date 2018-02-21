import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class CheckboxValuePosterService {
  valuePoster = new BehaviorSubject(null);
  vals = {};
  constructor() { }

  postValue(valObj) {
    const controlName = Object.keys(valObj)[0];
    this.vals[controlName] = valObj[controlName];
    this.valuePoster.next(this.vals);
  }
  clearValue() {
    this.valuePoster.next(null);
  }
  getValue() {
    return this.valuePoster.asObservable();
  }
}
