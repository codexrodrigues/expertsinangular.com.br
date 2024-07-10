import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NaveItemComponent} from "./components/nave-item/nave-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NaveItemComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <ul>
      <nave-item [nomeNave]="'Enterprise'" [tipoNave]="'Exploração'" [statusMissao]="'Operacional'" [tripulacao]="430"></nave-item>
      <nave-item [nomeNave]="'Voyager'" [tipoNave]="'Pesquisa'" [statusMissao]="'Em Missão'" [tripulacao]="150" ></nave-item>
      <nave-item [nomeNave]="'Defiant'" [tipoNave]="'Defesa'" [statusMissao]="'Em Reparos'" [tripulacao]="50" ></nave-item>
    </ul>
  `,
  styles: [],
})
export class AppComponent {
  title = 'frota-espacial-dados-dinamicos';
}
