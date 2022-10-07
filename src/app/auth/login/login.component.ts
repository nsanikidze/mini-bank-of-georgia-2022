import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Validators} from '../../shared/validators';

@Component({
  selector: 'bg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl(undefined, [Validators.required,
                                                                 Validators.minLength(2),
                                                                 Validators.maxLength(30),
                                                                 Validators.forbiddenSpaceValidator]),
      password: new FormControl(undefined, [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)]),
    });
  }

  OnSubmitForm(){
    console.log(this.loginForm);
  }

  get(controlName){
    return this.loginForm.get(controlName);
  }

  getErrors(controlName){
    if (this.get(controlName).errors){
      return Object.values(this.get(controlName).errors);
    }
  }

}
