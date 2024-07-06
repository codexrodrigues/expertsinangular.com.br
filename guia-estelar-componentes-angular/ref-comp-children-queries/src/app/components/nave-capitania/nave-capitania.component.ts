import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { SISTEMA_ARMAS } from "../tokens/tokens";
import {NgIf} from "@angular/common";

@Component({
  selector: 'nave-capitania',
  standalone: true,
  imports: [
    NgIf
  ],
  template: `
    <div class="capitania-container">
      <h3>Nave Capitânia</h3>
      <!-- <ng-content> é usado para projeção de conteúdo. O conteúdo colocado dentro deste componente será inserido aqui. -->
      <ng-content></ng-content>
      <!-- Exibe uma mensagem se o sistema de armas for localizado -->
      <p *ngIf="sistemaArmas">Sistema de Armas Localizado: {{ sistemaArmas }}</p>
    </div>
  `,
  styles: [`
    .capitania-container {
      text-align: center;
      margin-top: 20px;
      padding: 20px;
      background-color: #f8f9fa;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    p {
      color: #007bff;
      font-weight: bold;
    }
  `],
})
export class NaveCapitaniaComponent implements AfterContentInit {
  // ContentChild é usado para localizar um token de injeção fornecido por um componente filho.
  // SISTEMA_ARMAS é o token de injeção que estamos procurando.
  @ContentChild(SISTEMA_ARMAS) sistemaArmas!: string;

  // Após a inicialização do conteúdo, verificamos se o sistema de armas foi localizado.
  ngAfterContentInit() {
    // Log para depuração, mostrando o valor do sistema de armas encontrado.
    console.log('Sistema de Armas:', this.sistemaArmas);
  }
}
