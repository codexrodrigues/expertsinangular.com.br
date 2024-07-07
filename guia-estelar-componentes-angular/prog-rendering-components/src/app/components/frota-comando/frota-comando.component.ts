import {Component, Input} from '@angular/core';
import {NaveAdminComponent} from "../nave-admin/nave-admin.component";
import {NavePadraoComponent} from "../nave-padrao/nave-padrao.component";
import {NgComponentOutlet} from "@angular/common";

@Component({
  selector: 'frota-comando',
  standalone: true,
  imports: [
    NgComponentOutlet
  ],
  template: `
    <p>Missão para {{missao.tipo}}</p>
    <ng-container *ngComponentOutlet="escolherNave()"></ng-container>
  `,
  styles: ``
})
export class FrotaComandoComponent {
  @Input() missao: any;

  escolherNave() {
    return this.missao.tipo === 'admin' ? NaveAdminComponent : NavePadraoComponent;
  }
}
