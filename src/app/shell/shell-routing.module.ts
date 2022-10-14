import {ShellComponent} from './shell.component';
import {AuthGuard} from '../shared/auth-guard.guard';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BpmComponent} from './modules/bpm/bpm.component';
import {KrnComponent} from './modules/krn/krn.component';
import {ClientGuard} from './client-guard.guard';
import {PmdComponent} from './modules/pmd/pmd.component';
import {Bpm000Component} from './modules/bpm/bpm000/bpm000.component';
import {Bpm001Component} from './modules/bpm/bpm001/bpm001.component';
import {KrnicpComponent} from './modules/krn/krnicp/krnicp.component';
import {AccountsComponent} from './modules/krn/accounts/accounts.component';
import {OperationsComponent} from './modules/krn/operations/operations.component';
import {Pmd311Component} from './modules/pmd/pmd311/pmd311.component';
import {CreateAccountComponent} from './modules/krn/accounts/create-account/create-account.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'bpm',
        component: BpmComponent,
        children: [
          {
            path: '',
            component: Bpm000Component
          },
          {
            path: 'bpm000',
            component: Bpm000Component
          },
          {
            path: 'bpm001',
            component: Bpm001Component
          }
        ]
      },
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
          },
          {
            path: 'createAccount',
            component: CreateAccountComponent
          }
        ]
      },
      {
        path: 'pmd',
        component: PmdComponent,
        canActivate: [ClientGuard],
        children: [
          {
            path: '',
            component: Pmd311Component
          },
          {
            path: 'pmd311',
            component: Pmd311Component
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

export class ShellRoutingModule {}
