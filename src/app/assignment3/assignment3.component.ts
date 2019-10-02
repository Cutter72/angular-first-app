import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  visibility = false;
  clickLog = [];

  constructor() { }

  ngOnInit() {
  }

  logClick() {
    this.clickLog.push(new LogStamp(this.visibility ? 'show' : 'hide', this.clickLog.length > 3));
  }

}
class LogStamp {
  timeStamp;
  action;
  over4th = false;

  constructor(action: string, over4th: boolean) {
    this.timeStamp = Date.now();
    this.action = action;
    this.over4th = over4th;
  }
}
