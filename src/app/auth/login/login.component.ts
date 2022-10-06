import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

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
                                                                 this.forbiddenSpaceValidator.bind(this)]),
      password: new FormControl(undefined, [Validators.required,
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
    console.log(this.loginForm);
  }

  get(controlName){
    return this.loginForm.get(controlName);
  }

}
