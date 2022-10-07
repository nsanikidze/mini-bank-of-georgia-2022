import {Component,  OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BgValidators} from '../../shared/validators';
import {AuthService} from '../../shared/authorization/auth.service';

@Component({
  selector: 'bg-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signUpForm: FormGroup;
  passwordsMatched = true;

  constructor(private auth: AuthService) { }

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
    });
  }


  OnSubmitForm(){
    console.log(this.signUpForm);
    if (this.get('password').value !== this.get('confirmPassword').value){
      this.passwordsMatched = false;
      return;
    }
    this.passwordsMatched = true;

    if (this.signUpForm.invalid){
      return;
    }

    const name = this.get('name').value;
    const userName = this.get('userName').value;
    const password = this.get('password').value;

    this.auth.register(name, userName, password).subscribe((userdata) => console.log(userdata));
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
