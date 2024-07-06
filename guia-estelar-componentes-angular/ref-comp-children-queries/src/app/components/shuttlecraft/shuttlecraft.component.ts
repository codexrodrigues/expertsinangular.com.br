import {AfterViewInit, Component, EventEmitter, Output, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'shuttlecraft',
  template: `
    <ng-template #shuttleTemplate>
      <p>Shuttlecraft Pronto para Lançamento.</p>
      <button (click)="launch()">Ativar Shuttlecraft</button>
    </ng-template>
  `,
  standalone: true
})
export class ShuttlecraftComponent implements AfterViewInit {
  @ViewChild('shuttleTemplate', { static: true }) shuttleTemplate!: TemplateRef<any>;
  @Output() launched = new EventEmitter<void>();

  ngAfterViewInit() {
    console.log('ShuttlecraftComponent - TemplateRef:', this.shuttleTemplate);
  }

  launch() {
    this.launched.emit();
  }
}
