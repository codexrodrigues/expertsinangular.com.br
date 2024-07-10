import {Component, Input} from '@angular/core';

@Component({
  selector: 'nave-item',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h3>{{ nomeNave }}</h3>
      <p>Tipo: {{ tipoNave }}</p>
      <p>Status da Missão: {{ statusMissao }}</p>
      <p>Tripulação: {{ tripulacao }}</p>
      <p>Escudo de Energia: {{ escudoEnergia }}%</p>
      <button (click)="aumentarEscudo()">Aumentar Escudo</button>
      <button (click)="diminuirEscudo()">Diminuir Escudo</button>
    </div>
  `,
  styles: `
    /* nave-item.component.css */
    div {
      border: 1px solid gray;
      padding: 10px;
      margin-top: 10px;
    }

    h3 {
      color: blue;
    }
    button {
      margin-right: 5px;
    }

  `,
})
export class NaveItemComponent {
  @Input() nomeNave: string = 'USS Enterprise';
  @Input() tipoNave: string = 'Nave Estelar';
  @Input() statusMissao: string = 'Em andamento';
  @Input() tripulacao: number = 430;
  @Input() escudoEnergia: number = 85;

  atualizarNome(novoNome: string) {
    this.nomeNave = novoNome;
  }

  atualizarTipo(novoTipo: string) {
    this.tipoNave = novoTipo;
  }

  atualizarStatus(novoStatus: string) {
    this.statusMissao = novoStatus;
  }

  atualizarTripulacao(novoNumero: number) {
    this.tripulacao = novoNumero;
  }

  aumentarEscudo() {
    if (this.escudoEnergia < 100) {
      this.escudoEnergia += 5;
    }
  }

  diminuirEscudo() {
    if (this.escudoEnergia > 0) {
      this.escudoEnergia -= 5;
    }
  }
}
