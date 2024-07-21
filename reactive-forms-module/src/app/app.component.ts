import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NameEditorComponent} from "./components/app-name-editor/name-editor.component";
import {ProfileEditorComponent} from "./components/profile-editor/profile-editor.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NameEditorComponent, ProfileEditorComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <app-profile-editor></app-profile-editor>

  `,
  styles: [],
})
export class AppComponent {
  title = 'reactive-forms-module';
}
