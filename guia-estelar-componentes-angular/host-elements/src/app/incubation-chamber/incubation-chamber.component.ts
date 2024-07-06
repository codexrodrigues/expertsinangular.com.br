import { Component, HostBinding, HostListener } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'incubation-chamber',
  template: `
    <div class="chamber">
      <h3>Monitoramento da Incubação Alienígena</h3>
      <p>Temperatura da Incubação: {{temperature}}°C</p>
      <div class="alien-status" *ngIf="temperature >= 10">
        <img [src]="facehuggerImage" alt="Facehugger" class="facehugger-image" />
        <p *ngIf="temperature >= 50">Alerta: A temperatura está muito alta, o Facehugger pode emergir!</p>
      </div>
    </div>
  `,
  standalone: true,
  imports: [
    NgIf
  ],
  styles: [`
    .chamber {
      padding: 20px;
      text-align: center;
      color: #ffffff;
    }
    .alien-status {
      margin-top: 20px;
    }
    .alien-status img {
      width: 200px; /* Tamanho fixo */
      height: 200px; /* Tamanho fixo */
      border: 5px solid transparent;
      border-radius: 5px;
      transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
    }
    .alien-status img:hover {
      transform: scale(1.1);
      box-shadow: 0 0 15px rgba(255, 0, 0, 0.7);
    }
    :host {
      display: block;
      background: linear-gradient(to right, #0000ff, #00ffff, #00ff00, #ffff00, #ff8000, #ff0000);
      border: 1px solid #333;
      border-radius: 5px;
      padding: 20px;
      box-shadow: 0 0 10px rgba(0,0,0,0.5);
      cursor: pointer;
    }
    @keyframes change-image {
      0% { opacity: 0; transform: scale(0.9); }
      100% { opacity: 1; transform: scale(1); }
    }
    .facehugger-image {
      animation: change-image 0.5s;
    }
  `]
})
export class IncubationChamberComponent {
  @HostBinding('attr.aria-label') ariaLabel = 'Câmara de Incubação Alienígena';
  @HostBinding('style.background') get background() {
    if (this.temperature < 20) {
      return 'linear-gradient(to right, #0000ff, #00ffff)'; // Azul para ciano
    } else if (this.temperature < 40) {
      return 'linear-gradient(to right, #00ffff, #00ff00)'; // Ciano para verde
    } else if (this.temperature < 60) {
      return 'linear-gradient(to right, #00ff00, #ffff00)'; // Verde para amarelo
    } else if (this.temperature < 80) {
      return 'linear-gradient(to right, #ffff00, #ff8000)'; // Amarelo para laranja
    } else {
      return 'linear-gradient(to right, #ff8000, #ff0000)'; // Laranja para vermelho
    }
  }

  temperature: number = 36;

  @HostListener('click', ['$event'])
  updateTemperature(event: MouseEvent) {
    if (event.shiftKey) {
      this.decreaseTemperature();
    } else {
      this.increaseTemperature();
    }
  }

  get facehuggerImage() {
    if (this.temperature < 20) {
      return 'assets/images/facehugger_1.jpg'; // Ovo fechado
    } else if (this.temperature < 40) {
      return 'assets/images/facehugger_2.jpg'; // Ovo ligeiramente aberto
    } else if (this.temperature < 60) {
      return 'assets/images/facehugger_3.jpg'; // Ovo meio aberto
    } else if (this.temperature < 80) {
      return 'assets/images/facehugger_4.jpg'; // Ovo quase aberto
    } else if (this.temperature < 90) {
      return 'assets/images/facehugger_5.jpg'; // Facehugger emergindo
    } else {
      return 'assets/images/facehugger_6.jpg'; // Facehugger totalmente emergido
    }
  }

  increaseTemperature() {
    this.temperature = Math.min(100, this.temperature + 1);
  }

  decreaseTemperature() {
    this.temperature = Math.max(0, this.temperature - 1);
  }
}
