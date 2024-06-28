import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CargoShipComponent} from "./cargo-ship/cargo-ship.component";
import {ExplorationCraftComponent} from "./exploration-craft/exploration-craft.component";
import {FighterJetComponent} from "./fighter-jet/fighter-jet.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CargoShipComponent,ExplorationCraftComponent,FighterJetComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>    
    <app-cargo-ship></app-cargo-ship>
    <app-exploration-craft></app-exploration-craft>
    <app-fighter-jet></app-fighter-jet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'Frota de Naves Espaciais';
}
