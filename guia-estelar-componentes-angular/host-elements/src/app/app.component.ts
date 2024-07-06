import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FacehuggerComponent } from './facehugger-component/facehugger-component';
import { CustomSliderComponent } from './custom-slider/custom-slider.component';
import { ProfilePhotoComponent } from './profile-photo/profile-photo.component';
import { IncubationChamberComponent } from './incubation-chamber/incubation-chamber.component';

/**
 * AppComponent
 *
 * Este componente é o componente raiz da aplicação e é responsável por incorporar
 * outros componentes filhos, como `CustomSliderComponent`, `FacehuggerComponent`,
 * `ProfilePhotoComponent` e `IncubationChamberComponent`.
 */
@Component({
  selector: 'app-root', // Seletor do componente utilizado no HTML
  standalone: true,
  imports: [
    CustomSliderComponent,
    FacehuggerComponent,
    ProfilePhotoComponent,
    IncubationChamberComponent
  ],
  template: `
    <!-- Template que define o layout do componente -->
    <h1>Welcome to {{title}}!</h1>

    <div class="container">
      <div class="card">
        <h3>Detalhes do Facehugger</h3>
        <facehugger></facehugger>
      </div>

      <div class="card">
        <h3>Controle Deslizante</h3>
        <custom-slider></custom-slider>
      </div>

      <div class="card">
        <h3>Detalhes do Perfil do Xenomorfo</h3>
        <profile-photo role="group" [id]="otherId"></profile-photo>
      </div>

      <div class="card">
        <h3>Monitoramento da Câmara de Incubação</h3>
        <incubation-chamber></incubation-chamber>
      </div>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      padding: 20px;
    }
    .card {
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      padding: 20px;
      text-align: center;
      width: 300px;
    }
    h3 {
      color: #333;
    }
    h1 {
      text-align: center;
      color: #333;
    }
  `],
})
export class AppComponent {
  /**
   * Título da aplicação, exibido no cabeçalho.
   */
  title = 'host-elements';

  /**
   * ID alternativo utilizado para o componente `ProfilePhotoComponent`.
   */
  otherId = 'xeno-999';
}
