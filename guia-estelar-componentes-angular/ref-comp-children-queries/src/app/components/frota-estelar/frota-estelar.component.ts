import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {NaveReconComponent} from "../nave-recon/nave-recon.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'frota-estelar',
  standalone: true,
  imports: [NaveReconComponent, NgIf],
  template: `
    <div class="container">
      <h1>Comando da Frota Estelar</h1>
      <nave-recon></nave-recon>
      <div class="alert-container">
        <img *ngIf="alertaInimigo" src="assets/images/alert.jpeg">
        <p *ngIf="alertaInimigo">Alerta: Sinal inimigo detectado!</p>
      </div>
    </div>
  `,
  styles: [`
    .container {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background-color: #f0f0f0;
    }
    .alert-container {
      margin-top: 20px;
    }
    img {
      width: 100%;
      max-width: 300px;
      margin: 1px 0;
    }
    button {
      font-size: 1em;
      padding: 10px 20px;
      cursor: pointer;
    }
  `]
})
export class FrotaEstelarComponent implements AfterViewInit {
  @ViewChild(NaveReconComponent) naveRecon!: NaveReconComponent; // Usar o operador de asserção de não-nulo
  alertaInimigo = false;

  ngAfterViewInit() {
    this.naveRecon.sinalInimigoDetectado.subscribe(() => {
      this.alertaInimigo = true;
      console.log('Alerta enviado à Frota Estelar!');
    });
  }
}
