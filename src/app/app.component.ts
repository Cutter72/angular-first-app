import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private newMessageAllow = false;
  private alertCreationStatus = 'No alert was created!';
  private alertName = 'TEST alert init name';

  constructor() {
    setTimeout(() => {
      this.newMessageAllow = true;
    }, 2000);
  }

  isNewMessageAllowed(): boolean {
    return this.newMessageAllow;
  }

  onAlertCreation() {
    this.alertCreationStatus = 'Alert was created!';
  }

  onUpdateAlertName(event: any) {
    this.alertName = (event.target as HTMLInputElement).value;
  }
}
