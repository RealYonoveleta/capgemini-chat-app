import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function fieldsMatch(
  passwordFormName: string,
  confirmPasswordFormName: string,
  errorKey = 'mismatch',
): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const passwordControl = group.get(passwordFormName);
    const confirmPasswordControl = group.get(confirmPasswordFormName);

    if (!passwordControl || !confirmPasswordControl) return null;

    if (passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ [errorKey]: true });
    } else {
      if (confirmPasswordControl.hasError(errorKey)) {
        const errors = { ...confirmPasswordControl.errors };
        delete errors[errorKey];
        confirmPasswordControl.setErrors(Object.keys(errors).length ? errors : null);
      }
    }

    return null;
  };
}
