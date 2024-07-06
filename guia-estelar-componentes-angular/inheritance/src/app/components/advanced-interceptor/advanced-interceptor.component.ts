import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {CommunicationService} from "../../services/communication.service";
import {StarshipBaseComponent} from "../starship-base/starship-base.component";

@Component({
  selector: 'advanced-interceptor',
  standalone: true,
  imports: [],
  template: `
    <div class="advanced-interceptor">
      <p>Nome da Nave: {{ nome }}</p>
      <p>Capacidade de Combate: {{ capacidadeCombate }}</p>
      <p>Velocidade: {{ velocidade }} km/s</p>
    </div>
  `,
  styles: [`
    .advanced-interceptor {
      border: 1px solid #000;
      padding: 10px;
      margin: 10px;
      background-color: #e0f7fa;
    }
    `]
})
export class AdvancedInterceptorComponent extends StarshipBaseComponent implements OnInit {
  @Input() velocidade: number= 0;

  constructor(element: ElementRef, communicationService: CommunicationService) {
    super(element, communicationService);
  }

  override ngOnInit() {
    super.ngOnInit();
    console.log(`${this.nome} está pronto para a batalha!`);
  }

  override prepararNave() {
    console.log(`O ${this.nome} está se preparando para uma missão de alta velocidade.`);
    this.enviarMensagem(`O ${this.nome} está pronto para a missão.`);
  }

  atacarComVelocidade() {
    console.log(`${this.nome} está atacando com força ${this.capacidadeCombate} e velocidade ${this.velocidade}`);
    this.communicationService.enviarMensagem('Ataque rápido iniciado!');
  }

}
