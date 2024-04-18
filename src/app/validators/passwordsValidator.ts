import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordsValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const repitePassword = control.get('repitePassword');

  if (password && repitePassword && password.value.trim() !== repitePassword.value.trim()) {
    return { passwordsDistintos: true }
  }

  return null;
}
