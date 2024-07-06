import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'recon-fighter',
  standalone: true,
  imports: [],
  template: `
    <div class="fighter-container">
      <h3>Caça de Reconhecimento</h3>
      <button (click)="detectarSinal()">Detectar Sinal de Energia</button>
      <button (click)="retornarBase()">Retornar à Base</button>
    </div>
  `,
  styles: [`
    .fighter-container {
      text-align: center;
      margin-bottom: 20px;
    }
    button {
      margin: 5px;
      padding: 10px 20px;
      font-size: 1em;
      cursor: pointer;
    }
  `],
})
export class ReconFighterComponent {
  @Output() sinalDetectado = new EventEmitter<void>();
  @Output() retornouBase = new EventEmitter<void>();

  detectarSinal() {
    console.log('Sinal de energia detectado!');
    this.sinalDetectado.emit();
  }

  retornarBase() {
    console.log('Caça retornando à base.');
    this.retornouBase.emit();
  }
}
