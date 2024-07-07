import { Component } from '@angular/core';
import {InnerItemComponent} from "../inner-item/inner-item.component";

@Component({
  selector: 'outer-container',
  standalone: true,
  imports: [
    InnerItemComponent
  ],
  template: `
    <p>Início do comando da nave</p>
    <inner-item></inner-item>
    <p>Fim do comando da nave</p>
  `,
  styles: ``
})
export class OuterContainerComponent {

}
