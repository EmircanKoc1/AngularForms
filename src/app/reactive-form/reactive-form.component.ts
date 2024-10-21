import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { asyncCustomMinLenghtValidator, customNameValidator } from '../validators/name';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [
    ReactiveFormsModule, JsonPipe
  ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  frm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.frm = formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3), customNameValidator()]],
      surname: ["", asyncCustomMinLenghtValidator(3)],
      email: ["", asyncCustomMinLenghtValidator(4)],
      tel: [""],
      address: formBuilder.group({
        city: [""],
        address: [""],
        country: [""]
      })
    });
  }

  nameError: nameError = null;

  onSubmit(): void {
    console.log(this.frm.value);
    console.log(this.frm.valid);

    const control = this.frm.get("name");
    const error: string = control?.getError("required");

    this.nameError = {
      name: control?.getError("name"),
      required: control?.getError("required")
    }

    this.asyncEmailError = this.frm.get("email")?.getError("asyncEmail");

  }
  asyncEmailError: string | null = null;

  markAsTouch() {

    this.frm.get("name")?.markAsTouched();
  }

  markAsTouchAll() {

    this.frm.markAllAsTouched();
  }

  get name() {
    return this.frm.get("name");
  }

  get nameErrors(): string {
    const control = this.frm.get("name");
    const error: string = control?.getError("required");

    return error;

  }

  

}

type nameError = {
  name: string,
  required: string
} | null;