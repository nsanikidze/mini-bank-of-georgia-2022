import {FormControl, FormGroup, Validators} from '@angular/forms';

export class BgValidators extends Validators {

  static required(control){
    return super.required(control) ? { required: 'ველი აუცილებელია'} : undefined;
  }

  static minLength(length) {
    return (control) =>
      super.minLength(length)(control)
        ? { minlength: `გთხოვთ შეიყვანოთ მინიმუმ ${length} სიმბოლო` }
        : undefined;
  }

  static maxLength(length) {
    return (control) =>
      super.maxLength(length)(control)
        ? { maxlength: `გთხოვთ შეიყვანოთ მაქსიმუმ ${length} სიმბოლო` }
        : undefined;
  }

  static forbiddenSpaceValidator(controlName: FormControl ){
    if ( controlName.value  && controlName.value.includes(' ') && controlName.value.length > 1 && controlName.value.length < 30){
       return {forbiddenValue: `გთხოვთ დაიცვათ შაბლობი 'სფეისების გარეშე'`};
    }
  }

  static min(minNumber) {
    return (control) =>
      super.min(minNumber)(control)
        ? { minValue: `მინიმალური მნიშვნელობა უნდა იყოს ${minNumber}` }
        : undefined;
  }

  /*
  static matchedPasswordsValidator(formGroup: FormGroup) {
      if (formGroup.get('password').value !== formGroup.get('confirmPassword').value){
        return { notMatchPassword: 'პაროლები არ ემთხვევა'};
      } else {
        return undefined;
      }

  }*/


  static controlValurMatchedValidator(control1, control2) {
    return (formGroup) =>
      formGroup.get(control1).value !== formGroup.get(control2).value ? { notMatchPassword: 'პაროლები არ ემთხვევა'} : undefined;
  }


}
