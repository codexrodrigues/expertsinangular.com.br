import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AdvancedInterceptorComponent} from "./components/advanced-interceptor/advanced-interceptor.component";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {DialogDemoComponent} from "./components/dialog-demo/dialog-demo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdvancedInterceptorComponent, MatIcon, MatButton, DialogDemoComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <dialog-demo></dialog-demo>
    
    <advanced-interceptor nome="Interceptor 1" [velocidade]="9000"></advanced-interceptor>
  `,
  styles: [`
    h1 {
      text-align: center;
      margin-top: 20px;
      color: #0d47a1;
    }
  `],
})
export class AppComponent {
  title = 'Frota Estelar';
}
