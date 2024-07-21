import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-profile-editor',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <label for="first-name">First Name: </label>
      <input id="first-name" type="text" formControlName="firstName">

      <label for="last-name">Last Name: </label>
      <input id="last-name" type="text" formControlName="lastName">

      <div formGroupName="address">
        <h2>Address</h2>
        <label for="street">Street: </label>
        <input id="street" type="text" formControlName="street">

        <label for="city">City: </label>
        <input id="city" type="text" formControlName="city">

        <label for="state">State: </label>
        <input id="state" type="text" formControlName="state">

        <label for="zip">Zip Code: </label>
        <input id="zip" type="text" formControlName="zip">
      </div>

      <div formArrayName="aliases">
        <h2>Aliases</h2>
        <button type="button" (click)="addAlias()">Add Alias</button>

        <div *ngFor="let alias of aliases.controls; let i=index">
          <label for="alias-{{ i }}">Alias:</label>
          <input id="alias-{{ i }}" type="text" [formControlName]="i">
        </div>
      </div>      

      <button type="button" (click)="updateProfile()">Update Profile</button>
      <p>Form Status: {{ profileForm.status }}</p>
      <p>Complete o formulário para habilitar o botão.</p>
      <button type="submit" [disabled]="!profileForm.valid">Submit</button>
    </form>
  `,
  styles: ``
})
export class ProfileEditorComponent {
  constructor(private formBuilder: FormBuilder) {}

  profileForm = this.formBuilder.group({
    firstName: ['',Validators.required],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.formBuilder.array([this.formBuilder.control('')])
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }

}
