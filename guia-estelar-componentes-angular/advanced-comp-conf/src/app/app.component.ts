import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppCustomElementsComponent} from "./components/app-custom-elements/app-custom-elements.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppCustomElementsComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <custom-elements></custom-elements>
  `,
  styles: [],
})
export class AppComponent {
  title = 'advanced-comp-conf';
}
