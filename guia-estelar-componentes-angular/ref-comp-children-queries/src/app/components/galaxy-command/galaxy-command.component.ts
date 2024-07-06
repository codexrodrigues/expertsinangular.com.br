import { Component } from '@angular/core';
import {StarshipFleetComponent} from "../starship-fleet/starship-fleet.component";

@Component({
  selector: 'galaxy-command',
  standalone: true,
  imports: [
    StarshipFleetComponent
  ],
  template: `
    <starship-fleet></starship-fleet>
  `,
  styles: ``
})
export class GalaxyCommandComponent {

}
