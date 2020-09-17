import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'proj1';
  serverElements =
    [{name: 'Testserver', type: 'server', content: 'just a test!'}];


  // tslint:disable-next-line:typedef
  onServerCreated(serverData: { name: string, content: string }) {
    this.serverElements.push({
      name: serverData.name,
      type: 'server',
      content: serverData.content
    });
  }

  // tslint:disable-next-line:typedef
  onBlueprintCreated(serverData: { name: string, content: string }) {
    this.serverElements.push({
      name: serverData.name,
      type: 'bluePrint',
      content: serverData.content
    });
  }
}
