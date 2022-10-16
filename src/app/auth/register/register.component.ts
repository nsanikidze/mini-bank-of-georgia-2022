import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BgValidators} from '../../shared/validators';
import {AuthService} from '../../shared/authorization/auth.service';
import {AuthComponent} from '../auth.component';
import {Router} from '@angular/router';

@Component({
  selector: 'bg-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signUpForm: FormGroup;
  error;

  constructor(private auth: AuthService,
              private authComponent: AuthComponent,
              private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl(undefined, [BgValidators.required,
        BgValidators.minLength(2),
        BgValidators.maxLength(30),
        BgValidators.forbiddenSpaceValidator]),
      userName: new FormControl(undefined, [BgValidators.required,
        BgValidators.minLength(2),
        BgValidators.maxLength(30),
        BgValidators.forbiddenSpaceValidator]),
      password: new FormControl(undefined, [BgValidators.required,
        BgValidators.minLength(2),
        BgValidators.maxLength(30)]),
      confirmPassword: new FormControl(undefined, [BgValidators.required,
        BgValidators.minLength(2),
        BgValidators.maxLength(30)]),
    }, BgValidators.controlValurMatchedValidator('password', 'confirmPassword')
      );
  }


  OnSubmitForm(){
    if (this.signUpForm.invalid){
      return;
    }

    const name = this.get('name').value;
    const userName = this.get('userName').value;
    const password = this.get('password').value;

    this.auth.register(name, userName, password).subscribe(
      resData => {
        this.router.navigate(['/bpm']);
      },
      error => {
        this.authComponent.error = error;
      }
    );
    this.signUpForm.reset();
  }

  get(controlName){
    return this.signUpForm.get(controlName);
  }

  getErrors(controlName){
    if (this.get(controlName).errors){
      return Object.values(this.get(controlName).errors);
    }
  }

  getFormErrors(){
    if (this.signUpForm.errors) {
      return Object.values(this.signUpForm.errors);
    }
  }
}
