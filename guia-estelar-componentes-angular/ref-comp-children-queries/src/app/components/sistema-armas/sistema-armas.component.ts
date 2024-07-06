import { Component } from '@angular/core';
import {SISTEMA_ARMAS} from "../tokens/tokens";

@Component({
  selector: 'sistema-armas',
  standalone: true,
  imports: [],
  template: `<p>Sistema de Armas: Canhão de Íons</p>`,
  providers: [{ provide: SISTEMA_ARMAS, useValue: 'Canhão de Íons' }],
  styles: ``
})
export class SistemaArmasComponent {

}
