import {AbstractControl} from '@angular/forms';

export class CustomValidators {
  static passwordMatchValidator(control: AbstractControl) {
    // @ts-ignore
    const password: string = control.get('password').value; // get password from our password form control
    // @ts-ignore
    const confirmPassword: string = control.get('repeat_password').value; // get password from our confirmPassword form control
    // compare is the password math
    if (password !== confirmPassword) {
      // if they don't match, set an error in our confirmPassword form control
      // @ts-ignore
      control.get('repeat_password').setErrors({NoPassswordMatch: true});
    }
  }
}
