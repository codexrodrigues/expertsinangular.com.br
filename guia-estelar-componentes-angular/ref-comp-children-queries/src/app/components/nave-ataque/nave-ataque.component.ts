import {Component, Input} from '@angular/core';

@Component({
  selector: 'nave-ataque',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h3>{{nome}}</h3>
      <p>Status: {{status}}</p>
    </div>
  `,
  styles: ``
})
export class NaveAtaqueComponent {
  @Input() nome: string | undefined;
  status: string = 'Pronto para atacar';

  atacar() {
    this.status = 'Atacando!';
    console.log(`${this.nome} está atacando!`);
  }
}
