import { Component } from '@angular/core';
import {ReconFighterComponent} from "../recon-fighter/recon-fighter.component";
import {CruiserComponent} from "../cruiser/cruiser.component";
import {NaveCapitaniaComponent} from "../nave-capitania/nave-capitania.component";
import {SistemaArmasComponent} from "../sistema-armas/sistema-armas.component";
import {ShuttleComponent} from "../shuttle/shuttle.component";
import {ScoutShipComponent} from "../scout-ship/scout-ship.component";

@Component({
  selector: 'mission-control',
  standalone: true,
  imports: [
    ReconFighterComponent,
    CruiserComponent,
    NaveCapitaniaComponent,
    SistemaArmasComponent,
    ShuttleComponent,
    ScoutShipComponent
  ],
  template: `
    <div class="mission-control-container">
    <cruiser>
      <recon-fighter></recon-fighter>
      
      <!-- Exemplo: Explorando os Compartimentos Internos com descendants: true -->
      <shuttle>
        <scout-ship></scout-ship>
      </shuttle>
      
    </cruiser>
      <nave-capitania>
        <sistema-armas></sistema-armas>
      </nave-capitania>
    </div>
  `,
  styles: [`
    .mission-control-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #e9ecef;
    }
  `],
})
export class MissionControlComponent {

}
