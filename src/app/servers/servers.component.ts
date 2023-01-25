import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  public serverCreationStatus = 'No server created!';
  public serverName: string = '';
  public serverCreated = false;
  public servers = ['Testserver1', 'Testserver2', 'Lorem ipsum'];
  private allowNewServer: boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void { }

  getDisabled() {
    return !this.allowNewServer;
  }

  onCreateServer() {
    this.serverCreationStatus =
      'Server was created! Server name is ' + this.serverName;
    this.servers.push(this.serverName);
    this.allowNewServer = false;
    this.serverCreated = true;
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onUpdateServerName(event: Event) {
    let target = event.target as HTMLInputElement;
    this.serverName = target.value;
  }
}
