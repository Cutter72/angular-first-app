import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  static alertNameGlobal = 'asd';
  private alertName = 'TEST alert init name';
  private newMessageAllow = false;
  private alertCreationStatus = 'No alert was created!';
  private isCreated = false;
  alerts = [];

  constructor() {
    setTimeout(() => {
      this.newMessageAllow = true;
    }, 2000);
  }

  isNewMessageAllowed(): boolean {
    return this.newMessageAllow;
  }

  onAlertCreation() {
    this.isCreated = true;
    this.alertCreationStatus = 'Last added alert was "' + this.alertName + '"';
    setTimeout(() => {
      this.isCreated = false;
    }, 4000);
    this.alerts.push(this.alertName);
    this.setAlertNameGlobal();
  }

  onUpdateAlertName(event: any) {
    this.alertName = (event.target as HTMLInputElement).value;
    this.setAlertNameGlobal();
  }

  resetAlertName() {
    this.alertName = '';
    this.setAlertNameGlobal();
  }

  isResetAllowed() {
    return !(this.alertName === '' || !this.isNewMessageAllowed());
  }

  getColor(): string {
    if (this.isResetAllowed()) {
      return 'grey';
    }
    return 'white';
  }

  setAlertNameGlobal() {
    AppComponent.alertNameGlobal = this.alertName;
  }
}
