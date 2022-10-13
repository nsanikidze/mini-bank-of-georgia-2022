import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Client} from '../../client.model';

@Component({
  selector: 'bg-krnicp',
  templateUrl: './krnicp.component.html',
  styleUrls: ['./krnicp.component.scss']
})
export class KrnicpComponent implements OnInit {

  client: Client;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const clientData = JSON.parse(localStorage.getItem('clientData'));
    this.client = {
      firstName: clientData.firstName,
      lastName: clientData.lastName,
      image: clientData.image,
      clientKey: clientData.clientKey,
      sumAmount: clientData.sumAmount,
      plusPoints: clientData.plusPoints
    };
    /*this.route.queryParams.subscribe( (queryParams) => {
      console.log(queryParams);
      this.client = {
        firstName: queryParams.firstName,
        lastName: queryParams.lastName,
        image: queryParams.image,
        clientKey: queryParams.clientKey,
        sumAmount: queryParams.sumAmount,
        plusPoints: queryParams.plusPoints
      };
    });*/
  }

  clientLogout(){
    localStorage.removeItem('clientData');
    this.router.navigate(['/bpm']);
  }
}
