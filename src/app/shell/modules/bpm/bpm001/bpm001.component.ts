import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BgValidators} from '../../../../shared/validators';
import { Router } from '@angular/router';
import {PostsService} from '../../posts.service';
import {BpmClient} from '../bpm.model';

@Component({
  selector: 'bg-bpm001',
  templateUrl: './bpm001.component.html',
  styleUrls: ['./bpm001.component.scss']
})
export class Bpm001Component implements OnInit {

  clientRegistrationForm: FormGroup;
  client: BpmClient;

  constructor(private postsService: PostsService,
              private router: Router) { }


  ngOnInit(): void {
    this.clientRegistrationForm = new FormGroup({
      name: new FormControl(undefined, [BgValidators.required,
                                                             BgValidators.minLength(2),
                                                             BgValidators.maxLength(30)]),
      lastName: new FormControl(undefined, [BgValidators.required,
                                                                 BgValidators.minLength(2),
                                                                 BgValidators.maxLength(30)]),
      plusPoints: new FormControl(undefined, [BgValidators.required,
                                                                   BgValidators.min(0)])
      });
  }

  onAddClient(){

    if (this.clientRegistrationForm.invalid){
      return;
    }

    this.client = {
      name: this.get('name').value,
      lastName: this.get('lastName').value,
      plusPoints: this.get('plusPoints').value
    };

    this.postsService.createClientPost(this.client).subscribe( () => {
        this.router.navigate(['/bpm/bpm000']);
      });
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
