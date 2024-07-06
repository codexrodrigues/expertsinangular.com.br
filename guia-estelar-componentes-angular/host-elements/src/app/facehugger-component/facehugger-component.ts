import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'facehugger',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  template: `
    <img src="assets/images/facehugger.jpeg" alt="Facehugger"/>
  `,
  styles: `
    :host {
      position: absolute;
      top: 200px;
      left: 50px;
      animation: slither 2s infinite;
    }
    img {
      width: 300px;
      height: auto;
      max-width: 100%;
      border-radius: 10px;
    }

    @keyframes slither {
      0% { transform: translateX(0); }
      50% { transform: translateX(20px); }
      100% { transform: translateX(0); }
    }
  `
})
export class FacehuggerComponent {

}
