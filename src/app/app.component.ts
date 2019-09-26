import {Component} from '@angular/core';
import {WarningAlertComponent} from './warning-alert/warning-alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private newMessageAllow = false;
  private alertCreationStatus = 'No alert was created!';
  private alertName = 'TEST alert init name';
  private isCreated = false;

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
  }

  onUpdateAlertName(event: any) {
    this.alertName = (event.target as HTMLInputElement).value;
  }

  resetAlertName() {
    this.alertName = '';
  }

  isResetAllowed() {
    if (this.alertName === '' || !this.isNewMessageAllowed()) {
      return false;
    }
    return true;
  }
}
