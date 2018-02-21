import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {FormControl} from '@angular/forms';
@Injectable()
export class ServiceFocusBlurService {
  channelFocus$ = new Subject<FormControl>();
  channelBlur$ = new Subject<FormControl>();
  channelClick$ = new Subject<string>();
  constructor() { }
  postFocus(fc: FormControl) {
    this.channelFocus$.next(fc);
  }
  getFocus() {
    return this.channelFocus$.asObservable();
  }
  postBlur(fc: FormControl) {
    this.channelBlur$.next(fc);
  }
  getBlur() {
    return this.channelBlur$.asObservable();
  }
  postClick(data: string) {
    this.channelClick$.next(data);
  }
  getClick() {
    return this.channelClick$.asObservable();
  }
}
