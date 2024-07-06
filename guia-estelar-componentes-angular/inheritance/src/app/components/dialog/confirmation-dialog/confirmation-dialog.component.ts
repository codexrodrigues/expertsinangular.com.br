import {Component, Inject} from '@angular/core';
import {BaseDialogComponent} from "../base-dialog/base-dialog.component";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [
    MatButton
  ],
  template: `
    <h1 mat-dialog-title>{{ title }}</h1>
    <div mat-dialog-content>
      <p>{{ data.message }}</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="close(false)">Não</button>
      <button mat-button (click)="close(true)">Sim</button>
    </div>
  `,
  styles: ``
})
export class ConfirmationDialogComponent  extends BaseDialogComponent<ConfirmationDialogComponent> {

  constructor(
      public override dialogRef: MatDialogRef<ConfirmationDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public override data: any
  ) {
    super(dialogRef, data);
  }

}
