import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {CommunicationService} from "../../services/communication.service";

@Component({
  selector: 'app-starship-base',
  standalone: true,
  imports: [],
  template: `
    <div class="starship-base">
      <p>Nome da Nave: {{ nome }}</p>
      <p>Capacidade de Combate: {{ capacidadeCombate }}</p>
    </div>
  `,
  styles: [`
    .starship-base {
      border: 1px solid #000;
      padding: 10px;
      margin: 10px;
      background-color: #f8f8f8;
    }
    `]
})
export class StarshipBaseComponent implements OnInit {
  @Input() nome: string | undefined;
  @Input() capacidadeCombate: number= 0;
  protected isInitialized = false;

  constructor(protected element: ElementRef, protected communicationService: CommunicationService) {}

  ngOnInit() {
    this.isInitialized = true;
    console.log(`${this.nome} foi inicializada.`);
    this.prepararNave();
  }

  prepararNave() {
    console.log(`A nave ${this.nome} está se preparando.`);
    this.enviarMensagem(`A nave ${this.nome} está pronta.`);
  }

  atacar() {
    console.log(`${this.nome} está atacando com força ${this.capacidadeCombate}`);
    this.communicationService.enviarMensagem('Iniciando ataque!');
  }

  enviarMensagem(mensagem: string) {
    this.communicationService.enviarMensagem(mensagem);
  }

}
