import {Component, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'nave-recon',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h3>Nave de Reconhecimento</h3>
      <button (click)="detectarInimigo()">Detectar Sinal Inimigo</button>
    </div>
  `,
  styles: ``
})
export class NaveReconComponent {
  @Output() sinalInimigoDetectado = new EventEmitter<void>();

  detectarInimigo() {
    console.log('Sinal inimigo detectado!');
    this.sinalInimigoDetectado.emit();
  }
}
