import {AfterContentInit, Component, ContentChild, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {ShuttlecraftComponent} from "../shuttlecraft/shuttlecraft.component";

@Component({
  selector: 'enterprise',
  template: `
    <ng-content></ng-content>
    <ng-container #templateContainer></ng-container>
  `,
  standalone: true
})
export class EnterpriseComponent implements AfterContentInit {
  @ContentChild(ShuttlecraftComponent, { read: TemplateRef, descendants: true }) shuttlecraftTemplate!: TemplateRef<any>;
  @ViewChild('templateContainer', { read: ViewContainerRef, static: true }) templateContainer!: ViewContainerRef;

  ngAfterContentInit() {
    console.log('ngAfterContentInit - Verificando TemplateRef...');
    console.log('ContentChild:', this.shuttlecraftTemplate);
    if (this.shuttlecraftTemplate) {
      console.log('TemplateRef do Shuttlecraft encontrado!');
      this.templateContainer.createEmbeddedView(this.shuttlecraftTemplate);
    } else {
      console.log('TemplateRef do Shuttlecraft não encontrado.');
    }
  }
}
