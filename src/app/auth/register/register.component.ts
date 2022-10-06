import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'bg-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signUpForm: FormGroup;
  passwordsMatched = true;

  constructor() { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl(undefined, [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
        this.forbiddenSpaceValidator.bind(this)]),
      userName: new FormControl(undefined, [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
        this.forbiddenSpaceValidator.bind(this)]),
      password: new FormControl(undefined, [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)]),
      confirmPassword: new FormControl(undefined, [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)]),
    });
  }

  forbiddenSpaceValidator(controlName: FormControl ){
    if ( controlName.value !== null){
      if (controlName.value.includes(' ') && controlName.value.length > 1 && controlName.value.length < 30){
        return {forbiddenValue: true};
      }
    }
  }

  OnSubmitForm(){
    console.log(this.signUpForm);
    if (this.get('password').value !== this.get('confirmPassword').value){
      this.passwordsMatched = false;
    }
  }

  get(controlName){
    return this.signUpForm.get(controlName);
  }
}
