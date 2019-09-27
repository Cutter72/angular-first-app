import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
  private message = AppComponent.alertNameGlobal;
  private messageId = 13;

  // constructor() {
  //   this.message = AppComponent.alertNameGlobal;
  // }

  getMessage(): string {
    return this.message;
  }

  getMessageId(): number {
    return this.messageId;
  }

  ngOnInit() {
  }

}
