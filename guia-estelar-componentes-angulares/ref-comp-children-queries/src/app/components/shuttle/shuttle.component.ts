import { Component } from '@angular/core';
import {ScoutShipComponent} from "../scout-ship/scout-ship.component";

@Component({
  selector: 'shuttle',
  standalone: true,
  imports: [
    ScoutShipComponent
  ],
  template: `
    <div>
      <h3>Shuttle</h3>
      <ng-content></ng-content>
    </div>
  `,
  styles: ``
})
export class ShuttleComponent {

}
