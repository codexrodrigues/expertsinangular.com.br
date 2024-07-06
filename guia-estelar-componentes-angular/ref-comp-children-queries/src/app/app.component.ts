import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FrotaEstelarComponent} from "./components/frota-estelar/frota-estelar.component";
import {FrotaAtaqueComponent} from "./components/frota-ataque/frota-ataque.component";
import {MissionControlComponent} from "./components/mission-control/mission-control.component";
import {StarfleetComponent} from "./components/starfleet/starfleet.component";
import {GalaxyCommandComponent} from "./components/galaxy-command/galaxy-command.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FrotaEstelarComponent, FrotaAtaqueComponent, MissionControlComponent, StarfleetComponent, GalaxyCommandComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>
<!--    <frota-estelar></frota-estelar>;-->
<!--    <frota-ataque></frota-ataque>-->
<!--    <mission-control></mission-control>-->
<!--    <starfleet></starfleet>-->
    <galaxy-command></galaxy-command>
  `,
  styles: [],
})
export class AppComponent {
  title = 'ref-comp-children-queries';
}
