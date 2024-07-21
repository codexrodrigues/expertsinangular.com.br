import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-name-editor',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  template: `
    <label for="name">Nome: </label>
    <input id="name" type="text" [formControl]="name">
    <p>Valor: {{ name.value }}</p>
    <button type="button" (click)="updateName()">Update Name</button>
  `,
  styles: ``
})
export class NameEditorComponent {
  name = new FormControl('');
  updateName() {
    this.name.setValue('Deadpool');
  }
}
