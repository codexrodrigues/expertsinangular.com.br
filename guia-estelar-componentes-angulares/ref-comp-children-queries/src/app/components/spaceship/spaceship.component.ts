import {Component, Input} from '@angular/core';

@Component({
  selector: 'spaceship',
  standalone: true,
  imports: [],
  template: `
    <p>{{ nomeNave }} - Nível de Combustível: {{ nivelCombustivel }}%</p>
  `,
  styles: ``
})
export class SpaceshipComponent {
  @Input() nomeNave: string = '';
  @Input() nivelCombustivel: number = 100;
}
