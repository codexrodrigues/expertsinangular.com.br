import {AfterViewInit, Component, QueryList, ViewChildren} from '@angular/core';
import {NgForOf} from "@angular/common";
import {SpaceshipComponent} from "../spaceship/spaceship.component";

@Component({
  selector: 'starship-fleet',
  standalone: true,
  imports: [
    NgForOf,
    SpaceshipComponent
  ],
  template: `
    <div>
      <h3>Frota de Naves Estelares</h3>
      <spaceship *ngFor="let nave of navesEspaciais" [nomeNave]="nave.nome" [nivelCombustivel]="nave.nivel"></spaceship>
    </div>
  `,
  styles: ``
})
export class StarshipFleetComponent implements AfterViewInit {
  navesEspaciais = [
    { nome: 'USS Enterprise', nivel: 100 },
    { nome: 'Millennium Falcon', nivel: 85 },
    { nome: 'Battlestar Galactica', nivel: 75 },
    { nome: 'Serenity', nivel: 50 },
    { nome: 'Nostromo', nivel: 25 }
  ];

  @ViewChildren(SpaceshipComponent) naves!: QueryList<SpaceshipComponent>;

  ngAfterViewInit() {
    this.verificarNiveisCombustivel();
    this.naves.changes.subscribe(() => {
      this.verificarNiveisCombustivel();
    });
  }

  verificarNiveisCombustivel() {
    const niveisCombustivel = this.naves.map(nave => ({
      nome: nave.nomeNave,
      nivel: nave.nivelCombustivel
    }));
    console.log('Níveis de Combustível da Frota:', niveisCombustivel);
    // Analisar os níveis de combustível e tomar decisões
  }
}
