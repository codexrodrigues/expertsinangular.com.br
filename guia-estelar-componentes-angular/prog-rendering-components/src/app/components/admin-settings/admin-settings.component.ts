import { Component } from '@angular/core';
import {BasicSettingsComponent} from "../basic-settings/basic-settings.component";
import {NgComponentOutlet, NgIf} from "@angular/common";

@Component({
  selector: 'admin-settings',
  standalone: true,
  imports: [
    BasicSettingsComponent,
    NgComponentOutlet,
    NgIf
  ],
  template: `
    <section>
      <h2>Configurações Básicas</h2>
      <basic-settings />
    </section>
    <section>
      <h2>Configurações Avançadas</h2>
      <button (click)="loadAdvanced()" *ngIf="!advancedSettings">
        Carregar Configurações Avançadas
      </button>
      <ng-container *ngComponentOutlet="advancedSettings"></ng-container>
    </section>
  `,
  styles: ``
})
export class AdminSettingsComponent {
  advancedSettings: any | null = null;

  async loadAdvanced() {
    const { AdvancedSettingsComponent } = await import('../advanced-settings/advanced-settings.component');
    this.advancedSettings = AdvancedSettingsComponent;
  }
}
