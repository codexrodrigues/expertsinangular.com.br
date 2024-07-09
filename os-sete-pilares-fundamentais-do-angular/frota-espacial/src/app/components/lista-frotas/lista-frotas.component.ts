import { Component } from '@angular/core';
import {NaveItemComponent} from "../nave-item/nave-item.component";

@Component({
  selector: 'lista-frotas',
  standalone: true,
  imports: [
    NaveItemComponent
  ],
  template: `
    <ul>
      <nave-item nomeNave="Enterprise" tipoNave="Exploração" statusNave="Operacional"></nave-item>
      <nave-item nomeNave="Voyager" tipoNave="Pesquisa" statusNave="Em Missão"></nave-item>
      <nave-item nomeNave="Defiant" tipoNave="Defesa" statusNave="Em Reparos"></nave-item>
    </ul>
  `,
  styles: ``
})
export class ListaFrotasComponent {

}
