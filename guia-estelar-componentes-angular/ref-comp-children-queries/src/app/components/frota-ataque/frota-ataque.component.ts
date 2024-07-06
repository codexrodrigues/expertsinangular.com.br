import {Component, QueryList, ViewChildren} from '@angular/core';
import {NaveAtaqueComponent} from "../nave-ataque/nave-ataque.component";

@Component({
  selector: 'frota-ataque',
  standalone: true,
  imports: [NaveAtaqueComponent],
  template: `
    <div class="container">
      <h1>Comando da Frota de Ataque</h1>
      <nave-ataque nome="Caça X"></nave-ataque>
      <nave-ataque nome="Bombardeiro Y"></nave-ataque>
      <nave-ataque nome="Nave Z"></nave-ataque>
      <button (click)="iniciarAtaque()">Comando: Atacar!</button>
    </div>
  `,
  styles: [`
    .container {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background-color: #f0f0f0;
    }
    div {
      margin: 10px 0;
    }
    button {
      font-size: 1em;
      padding: 10px 20px;
      cursor: pointer;
      margin-top: 20px;
    }
  `],
})
export class FrotaAtaqueComponent {
  @ViewChildren(NaveAtaqueComponent) navesDeAtaque!: QueryList<NaveAtaqueComponent>;

  ngAfterViewInit() {
    // Você pode fazer algo quando as naves estiverem prontas, se necessário
  }

  iniciarAtaque() {
    this.navesDeAtaque.forEach(nave => nave.atacar());
    console.log('Todas as naves de ataque receberam o comando para atacar!');
  }
}
