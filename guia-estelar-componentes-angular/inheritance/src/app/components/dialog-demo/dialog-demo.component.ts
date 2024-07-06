import { Component } from '@angular/core';
import {FormDialogComponent} from "../dialog/form-dialog/form-dialog.component";
import {ConfirmationDialogComponent} from "../dialog/confirmation-dialog/confirmation-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'dialog-demo',
  standalone: true,
  imports: [
    MatButton
  ],
  template: `
    <button mat-button (click)="openConfirmationDialog()">Open Confirmation Dialog</button>
    <button mat-button (click)="openFormDialog()">Open Form Dialog</button>
  `,
  styles: ``
})
export class DialogDemoComponent {
  constructor(public dialog: MatDialog) {}

  openConfirmationDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: 'Confirmation',
        message: 'Are you sure you want to proceed?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Confirmation dialog closed with result:', result);
    });
  }

  openFormDialog(): void {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      data: {
        title: 'Form Dialog'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Form dialog closed with form data:', result);
      } else {
        console.log('Form dialog was closed without submitting');
      }
    });
  }
}
