import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BgValidators} from '../../../../shared/validators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'bg-bpm001',
  templateUrl: './bpm001.component.html',
  styleUrls: ['./bpm001.component.scss']
})
export class Bpm001Component implements OnInit {

  clientRegistrationForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.clientRegistrationForm = new FormGroup({
      name: new FormControl(undefined, [BgValidators.required,
        BgValidators.minLength(2),
        BgValidators.maxLength(30)]),
      lastName: new FormControl(undefined, [BgValidators.required,
              BgValidators.minLength(2),
              BgValidators.maxLength(30)]),
      plusPoints: new FormControl(undefined, [BgValidators.min(0)])
      });
  }

  OnSubmitForm(){
    if (this.clientRegistrationForm.invalid){
      return;
    }

    const name = this.get('name').value;
    const lastName = this.get('lastName').value;
    const plusPoints = this.get('plusPoints').value;

    console.log(name + lastName + plusPoints);
  }

  get(controlName){
    return this.clientRegistrationForm.get(controlName);
  }

  getErrors(controlName){
    if (this.get(controlName).errors){
      return Object.values(this.get(controlName).errors);
    }
  }

}
