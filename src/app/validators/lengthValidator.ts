import { AbstractControl, ValidationErrors } from "@angular/forms";

export function lengthValidator(control: AbstractControl): ValidationErrors | null {
  const value: string = control.value;
  return value.length !== 6 ? { length: true } : null;
}
