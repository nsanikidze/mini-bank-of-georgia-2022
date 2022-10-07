import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {BgValidators} from '../../shared/validators';
import {AuthService} from '../../shared/authorization/auth.service';

@Component({
  selector: 'bg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl(undefined, [BgValidators.required,
        BgValidators.minLength(2),
        BgValidators.maxLength(30),
        BgValidators.forbiddenSpaceValidator]),
      password: new FormControl(undefined, [BgValidators.required,
        BgValidators.minLength(2),
        BgValidators.maxLength(30)]),
    });
  }


  OnSubmitForm(){
    console.log(this.loginForm);

    if (this.loginForm.invalid){
      return;
    }

    const userName = this.get('userName').value;
    const password = this.get('password').value;

    this.auth.login(userName, password).subscribe((userdata) => console.log(userdata));
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
