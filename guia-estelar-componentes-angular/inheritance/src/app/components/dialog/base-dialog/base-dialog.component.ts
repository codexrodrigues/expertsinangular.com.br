import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'base-dialog',
  standalone: true,
  imports: [],
  template: ``,
  styles: ``
})
export class BaseDialogComponent<T> {
  title: string;

  constructor(
      public dialogRef: MatDialogRef<T>,
      @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = data.title || 'Default Title';
  }

  close(result?: any): void {
    this.dialogRef.close(result);
  }

  executeAction(action: () => void): void {
    action();
  }

}
