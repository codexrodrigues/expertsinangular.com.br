import { Component } from '@angular/core';
import {EnterpriseComponent} from "../enterprise/enterprise.component";
import {ShuttlecraftComponent} from "../shuttlecraft/shuttlecraft.component";

@Component({
  selector: 'starfleet',
  template: `
    <h1>Starfleet Operations</h1>
    <enterprise>
      <shuttlecraft (launched)="onShuttlecraftLaunched()"></shuttlecraft>
    </enterprise>
  `,
  standalone: true,
  imports: [EnterpriseComponent, ShuttlecraftComponent]
})
export class StarfleetComponent {
  onShuttlecraftLaunched() {
    console.log('O Shuttlecraft foi ativado!');
  }
}
