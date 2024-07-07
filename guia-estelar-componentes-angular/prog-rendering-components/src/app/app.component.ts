import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FrotaComandoComponent} from "./components/frota-comando/frota-comando.component";
import {InnerItemComponent} from "./components/inner-item/inner-item.component";
import {OuterContainerComponent} from "./components/outer-container/outer-container.component";
import {AdminSettingsComponent} from "./components/admin-settings/admin-settings.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FrotaComandoComponent, InnerItemComponent, OuterContainerComponent, AdminSettingsComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <frota-comando [missao]="missao"></frota-comando>
    <outer-container></outer-container>
    <admin-settings></admin-settings>
  `,
  styles: [],
})
export class AppComponent {
  title = 'prog-rendering-components';
  missao = { tipo: 'admin' }; // Exemplo de missão, você pode alterar conforme necessário
}
