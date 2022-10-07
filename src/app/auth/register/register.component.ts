import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Validators} from '../../shared/validators';

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
        Validators.forbiddenSpaceValidator]),
      userName: new FormControl(undefined, [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
        Validators.forbiddenSpaceValidator]),
      password: new FormControl(undefined, [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)]),
      confirmPassword: new FormControl(undefined, [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)]),
    });
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

  getErrors(controlName){
    if (this.get(controlName).errors){
      return Object.values(this.get(controlName).errors);
    }
  }
}
