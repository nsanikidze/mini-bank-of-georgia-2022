/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {KrnicpComponent} from './krnicp/krnicp.component';
import {AuthGuard} from '../../../shared/auth-guard.guard';
import {ClientGuard} from '../../client-guard.guard';
import {KrnComponent} from './krn.component';
import {AccountsComponent} from './accounts/accounts.component';
import {PmdComponent} from '../pmd/pmd.component';
import {CreateAccountComponent} from './accounts/create-account/create-account.component';
import {ShellComponent} from '../../shell.component';
import {BpmComponent} from '../bpm/bpm.component';
import {Bpm000Component} from '../bpm/bpm000/bpm000.component';
import {Bpm001Component} from '../bpm/bpm001/bpm001.component';
import {OperationsComponent} from './operations/operations.component';


const routes: Routes = [
  {
    path: '',
    component: KrnComponent,
    canActivate: [AuthGuard, ClientGuard],
    children:  [{
      path: '',
      component: KrnComponent
    },
      {
        path: 'accounts',
        component: AccountsComponent,
        children: [{
          path: '',
          component: AccountsComponent
        },
          {
            path: 'createAccount',
            component: CreateAccountComponent
          }]
      },
      {
        path: 'krnicp',
        component: KrnicpComponent,
      },
      {
        path: 'pmd',
        component: PmdComponent
      }
    ]
  }
];

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'krn',
        component: KrnComponent,
        canActivate: [ClientGuard],
        children: [
          {
            path: '',
            component: KrnicpComponent
          },
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
          }
        ]
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KrnRoutingModule {}
*/
