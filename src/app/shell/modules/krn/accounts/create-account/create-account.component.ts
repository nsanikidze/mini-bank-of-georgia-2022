import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../../posts.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {BgValidators} from '../../../../../shared/validators';

@Component({
  selector: 'bg-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  accountCreatorForm: FormGroup;

  constructor(private postsService: PostsService,
              private router: Router) { }

  ngOnInit(): void {
    this.accountCreatorForm = new FormGroup({
      accountName: new FormControl(undefined, [BgValidators.required,
        BgValidators.minLength(2),
        BgValidators.maxLength(30)]),
      amount: new FormControl(undefined, [BgValidators.min(0)])
    });
  }

  OnSubmitForm(){
    console.log(1);
  }

  get(controlName){
    return this.accountCreatorForm.get(controlName);
  }

  getErrors(controlName){
    if (this.get(controlName).errors){
      return Object.values(this.get(controlName).errors);
    }
  }

  moveAccount(){
    this.router.navigate(['/accounts']);
  }
}
