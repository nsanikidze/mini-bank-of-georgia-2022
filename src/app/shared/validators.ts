import {AbstractControl, FormControl, Validators} from '@angular/forms';
import {ValidateFn} from 'codelyzer/walkerFactory/walkerFn';

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
}
