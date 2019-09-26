import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
  private message = 'Crytical warning!!!';
  private messageId = 13;

  getMessage(): string {
    return this.message;
  }

  getMessageId(): number {
    return this.messageId;
  }

  ngOnInit() {
  }

}
