import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {KrnicpComponent} from './krnicp/krnicp.component';
import {KrnComponent} from './krn.component';
import {AccountsComponent} from './accounts/accounts.component';
import {OperationsComponent} from './operations/operations.component';
import {CreateAccountComponent} from './accounts/create-account/create-account.component';



const routes: Routes = [
  {
    path: '',
    component: KrnComponent,
    children: [
      {
        path: 'krnicp',
        component: KrnicpComponent
      },
      {
        path: 'accounts',
        component: AccountsComponent
      },
      {
        path: 'operations',
        component: OperationsComponent
      },
      {
        path: 'createAccount',
        component: CreateAccountComponent
      },
      {
        path: '',
        redirectTo: 'krnicp',
        pathMatch: 'pull'
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KrnRoutingModule {}

