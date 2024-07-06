import { Component } from '@angular/core';

@Component({
  selector: 'explorador',
  standalone: true,
  imports: [],
  template: `<p>Nave Exploradora Pronta</p>`,
  styles: ``
})
export class ExploradorComponent {
  status = 'Pronta para missão';
}
