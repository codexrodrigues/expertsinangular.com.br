import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ListaFrotasComponent} from "./components/lista-frotas/lista-frotas.component";
import {EstatisticasFrotaComponent} from "./components/estatisticas-frota/estatisticas-frota.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaFrotasComponent, EstatisticasFrotaComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <div>
      <h1>Sistema de Gerenciamento de Frotas</h1>
      <lista-frotas></lista-frotas>
      <estatisticas-frota></estatisticas-frota>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = 'frota-espacial';
}
