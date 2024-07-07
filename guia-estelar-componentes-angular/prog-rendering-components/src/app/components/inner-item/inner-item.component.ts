import {Component, ViewContainerRef} from '@angular/core';
import {LeafContentComponent} from "../leaf-content/leaf-content.component";

@Component({
  selector: 'inner-item',
  standalone: true,
  imports: [],
  template: `
    <button (click)="loadContent()">Lançar nave de exploração</button>
  `,
  styles: ``
})
export class InnerItemComponent {
  constructor(private viewContainer: ViewContainerRef) {}

  loadContent() {
    this.viewContainer.createComponent(LeafContentComponent);
  }
}
