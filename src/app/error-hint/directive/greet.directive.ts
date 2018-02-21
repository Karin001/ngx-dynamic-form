import { Directive,HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appGreet]'
})
export class GreetDirective {
  @Input() appGreet: string;
  @HostBinding('innerText')
  get greet(){
    return this.appGreet;
  }
  constructor() { }

}
