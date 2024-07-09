import {Component, Input} from '@angular/core';

@Component({
  selector: 'nave-item',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h3>{{ nomeNave }}</h3>
      <p>Tipo: {{ tipoNave }}</p>
      <p>Status: {{ statusNave }}</p>
    </div>
  `,
  styles: `
    div {
      border: 1px solid gray;
      padding: 10px;
      margin: 5px;
    }
  `,
})
export class NaveItemComponent {
  @Input() nomeNave: string = '';
  @Input() tipoNave: string = '';
  @Input() statusNave: string = '';
}
