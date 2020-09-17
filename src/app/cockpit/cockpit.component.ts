import {Component, EventEmitter, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent {

  @Output() serverCreated = new EventEmitter<{ name: string, content: string }>();
  @Output() blueprintCreated = new EventEmitter<{ name: string, content: string }>();

  serverName = '';
  serverContent = '';

  // tslint:disable-next-line:typedef
  createServer() {
    this.serverCreated.emit({name: this.serverName, content: this.serverContent});
  }

  // tslint:disable-next-line:typedef
  createServerBluePrint() {
    this.blueprintCreated.emit({name: this.serverName, content: this.serverContent});

  }
}
