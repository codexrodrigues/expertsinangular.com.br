import { Component } from '@angular/core';

@Component({
  selector: 'custom-card',
  standalone: true,
  imports: [],
  template: `
    <div class="card-shadow">
      <ng-content select="cockpit"></ng-content>
      <div class="card-divider"></div>
      <ng-content select="cargo-bay"></ng-content>
      <div class="card-divider"></div>
      <ng-content></ng-content> <!-- Captura todo conteúdo que não corresponde aos seletores acima -->
    </div>
  `,
  styles: `
    .card-shadow {
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      padding: 16px;
      border-radius: 8px;
      background: white;
      max-width: 400px;
      margin: 0 auto;
    }
    .card-divider {
      height: 1px;
      background: #E41B94;
      margin: 16px 0;
    }
    .centered-image {
      display: block;
      margin: 0 auto;
      max-width: 100%;
    }
  `
})
export class CustomCardComponentComponent {

}
