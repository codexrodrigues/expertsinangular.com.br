import {AfterContentInit, AfterViewInit, Component, ContentChild, OnInit, ViewChild} from '@angular/core';
import {ReconFighterComponent} from "../recon-fighter/recon-fighter.component";
import {NgIf} from "@angular/common";
import {ExploradorComponent} from "../explorador/explorador.component";
import {ScoutShipComponent} from "../scout-ship/scout-ship.component";

@Component({
  selector: 'cruiser',
  standalone: true,
  imports: [
    NgIf,
    ExploradorComponent,
    ScoutShipComponent
  ],
  template: `
    <div class="cruiser-container">
      <h1>Nave-Mãe</h1>
      <!-- Inclui o componente filho Explorador -->
      <explorador></explorador>
      <!-- Exibe o status da nave exploradora -->
      <p>Status da Nave Exploradora: {{ statusExplorador }}</p>
      <ng-content></ng-content>
      <p *ngIf="sinalDetectado">Analisando origem do sinal de energia...</p>
      <p *ngIf="cacaRetornou">O caça retornou à base.</p>
    </div>
  `,
  styles: [`
    .cruiser-container {
      text-align: center;
      padding: 20px;
      background-color: #f8f9fa;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    .alert {
      color: #007bff;
      font-weight: bold;
    }
  `],
})
export class CruiserComponent implements OnInit, AfterViewInit,AfterContentInit  {
  @ContentChild(ReconFighterComponent) reconFighter!: ReconFighterComponent;
  sinalDetectado = false;
  cacaRetornou = false;

  // Usamos @ViewChild com static: true para garantir que a nave exploradora
  // esteja disponível durante a inicialização do componente.
  @ViewChild(ExploradorComponent, { static: true }) explorador!: ExploradorComponent;
  statusExplorador: string | undefined;

  // @ContentChild com descendants: true permite buscar o ShuttleComponent >> ScoutShip
  // em qualquer nível de profundidade na estrutura de componentes.
  @ContentChild(ScoutShipComponent, { descendants: true}) scoutShip!: ScoutShipComponent;

  ngAfterContentInit() {
    if (this.reconFighter) {
      this.reconFighter.sinalDetectado.subscribe(() => {
        this.sinalDetectado = true;
        console.log('Sinal de energia detectado pelo ReconFighter. Iniciando análise...');
      });

      this.reconFighter.retornouBase.subscribe(() => {
        this.cacaRetornou = true;
        console.log('ReconFighter retornou à base.');
      });
    }

    //Explorando os Compartimentos Internos com descendants: true
    if (this.scoutShip) {
      console.log('Nave ScoutShip encontrada:', this.scoutShip.status);
    } else {
      console.log('Nave ScoutShip não encontrada.');
    }

  }

  ngOnInit() {
    // Este método é chamado imediatamente após a criação do componente,
    // permitindo acessar o Explorador antes da detecção de mudanças.
    this.statusExplorador = this.explorador.status;
    console.log('ngOnInit - Comunicação estabelecida com a Nave Exploradora:', this.statusExplorador);
  }

  ngAfterViewInit() {
    // Este método é chamado após a primeira detecção de mudanças,
    // confirmando que o Explorador ainda está disponível.
    console.log('ngAfterViewInit - Nave Exploradora:', this.explorador.status);
  }

}
