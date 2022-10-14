import {AfterViewChecked, AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Client} from '../../client.model';
import {PostsService} from '../../posts.service';

@Component({
  selector: 'bg-krnicp',
  templateUrl: './krnicp.component.html',
  styleUrls: ['./krnicp.component.scss']
})
export class KrnicpComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {

  }

}
