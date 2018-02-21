import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.scss']
})
export class HintComponent implements OnInit {
  @Input()
  errorCode: string;
  @Input()
  errorMessage: string;
  constructor() { }

  ngOnInit() {
  }

}
