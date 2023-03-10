import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent implements OnInit {
  private serverId: number = Math.floor(Math.random() * 100);
  private serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void { }

  getServerStatus() {
    return this.serverStatus;
  }

  getServerId() {
    return this.serverId;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
