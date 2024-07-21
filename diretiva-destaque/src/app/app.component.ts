import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DestaqueDirective} from "./directives/destaque.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DestaqueDirective],
  template: `
    <h1 appDestaque>Welcome to {{title}}!</h1>
    <p appDestaque>Este parágrafo será iluminado.</p>
  `,
  styles: [],
})
export class AppComponent {
  title = 'Diretiva Destaque';
}
