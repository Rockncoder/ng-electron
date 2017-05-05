import * as os from 'os';
import * as electron from 'electron';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  eVersion = electron.remote.process.versions.electron;
  title = `app works on ${os.platform()} with electron ${this.eVersion}!`;
}
