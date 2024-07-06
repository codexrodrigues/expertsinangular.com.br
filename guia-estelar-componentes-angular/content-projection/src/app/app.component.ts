import { Component } from '@angular/core';
import {CustomCardComponentComponent} from "./custom-card-component/custom-card-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CustomCardComponentComponent],
  template: `
    <h1 class="gradient-text centered-text">Welcome to {{title}}!</h1>

    <custom-card>
      <div ngProjectAs="cockpit">
        <h2>Comando da Nave</h2>
      </div>
      <p cargo-bay>Armazenamento de Carga Espacial</p>
      <img class="centered-image" src="https://expertsinangular.com/wp-content/uploads/2024/06/Designer-9-1024x585.jpeg" alt="Imagem da Nave" />
      <p class="additional-info">Informações adicionais sobre a nave:<br>
        Este modelo de nave espacial é equipado com as mais recentes tecnologias de propulsão intergaláctica.<br>
        Possui capacidade para armazenar até 50 toneladas de carga espacial e acomoda uma tripulação de 10 membros.<br>
        Além disso, conta com um avançado sistema de defesa contra meteoros e outros perigos do espaço sideral.
      </p>
    </custom-card>
  `,
  styles: [`
    .centered-image {
      display: block;
      margin: 0 auto;
      max-width: 100%;
    }
    .gradient-text {
      background: linear-gradient(to right, #000000, #F12DC4, #AD23F3, #F10855, #E41B94);
      -webkit-background-clip: text;
      color: transparent;
    }
    .centered-text {
      text-align: center;
    }
    .additional-info {
      font-family: 'Arial', sans-serif;
      font-size: 1rem;
      line-height: 1.6;
      margin: 20px 0;
      color: #333;
      background-color: #f9f9f9;
      padding: 10px 15px;
      position: relative;
    }
    .additional-info::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 5px;
      background: linear-gradient(to bottom, #000000, #F12DC4, #AD23F3, #F10855, #E41B94);
      border-radius: 4px 0 0 4px;
    }
  `],
})
export class AppComponent {
  title = 'content-projection';
}
