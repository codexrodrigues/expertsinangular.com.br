import {Component, Inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {BaseDialogComponent} from "../base-dialog/base-dialog.component";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-form-dialog',
  standalone: true,
  imports: [
    MatFormField,
    ReactiveFormsModule, MatLabel, MatInput, NgIf, MatFormFieldModule, MatButton
  ],
  template: `
    <h1 mat-dialog-title>{{ title }}</h1>
    <div mat-dialog-content>
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <mat-form-field appearance="fill" class="full-width">
          <mat-label>Name</mat-label>
          <input matInput placeholder="Name" formControlName="name">
          <mat-error *ngIf="form.get('name')?.invalid">{{ getErrorMessage('name') }}</mat-error>
        </mat-form-field>
        <mat-form-field appearance="fill" class="full-width">
          <mat-label>Email</mat-label>
          <input matInput placeholder="Email" formControlName="email">
          <mat-error *ngIf="form.get('email')?.invalid">{{ getErrorMessage('email') }}</mat-error>
        </mat-form-field>
        <div mat-dialog-actions align="end">
          <button mat-button (click)="close()">Cancel</button>
          <button mat-button color="primary" type="submit" [disabled]="form.invalid">Submit</button>
        </div>
      </form>
    </div>
  `,
  styles: [`
    .full-width {
      width: 100%;
    }
    mat-dialog-content {
      overflow: hidden;
    }
    mat-dialog-actions {
      justify-content: flex-end;
    }
  `]
})
export class FormDialogComponent extends BaseDialogComponent<FormDialogComponent> {
  form: FormGroup;

  constructor(
      public override dialogRef: MatDialogRef<FormDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public override data: any,
      private fb: FormBuilder
  ) {
    super(dialogRef, data);
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.close(this.form.value);
    }
  }

  getErrorMessage(controlName: string): string {
    const control = this.form.get(controlName);
    if (control?.hasError('required')) {
      return `${controlName} is required`;
    }
    if (controlName === 'email' && control?.hasError('email')) {
      return 'Invalid email address';
    }
    return '';
  }
}
