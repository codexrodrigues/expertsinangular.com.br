import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HalInterfaceComponent} from "./components/hal-interface/hal-interface.component";
import {NaveMaeComponent} from "./components/nave-mae/nave-mae.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HalInterfaceComponent, NaveMaeComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <hal-interface></hal-interface>
    <nave-mae></nave-mae>
  `,
  styles: [],
})
export class AppComponent {
  title = 'using-dom-apis';
}
