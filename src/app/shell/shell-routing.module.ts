import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell.component';
import {Bpm000Component} from './modules/bpm/bpm000/bpm000.component';
import {Bpm001Component} from './modules/bpm/bpm001/bpm001.component';
import {KrnicpComponent} from './modules/krn/krnicp/krnicp.component';
import {AccountsComponent} from './modules/krn/accounts/accounts.component';
import {CreateAccountComponent} from './modules/krn/accounts/create-account/create-account.component';
import {AuthGuard} from './auth-guard.guard';
import {ClientGuard} from './client-guard.guard';
import {OperationsComponent} from './modules/operations/operations.component';
import {Pmd311Component} from './modules/pmd/pmd311/pmd311.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    canActivate: [AuthGuard],
    children:  [{
      path: '',
      component: Bpm000Component
    }
  ]
  },
  {
    path: 'bpm',
    component: ShellComponent,
    canActivate: [AuthGuard],
    children:  [{
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
    path: 'krnicp',
    component: ShellComponent,
    canActivate: [AuthGuard, ClientGuard],
    children:  [
      {
        path: 'accounts',
        component: AccountsComponent
      },
      {
        path: 'createAccount',
        component: CreateAccountComponent
      },
      {
        path: 'operations',
        component: OperationsComponent
      }
    ]
  },
  {
    path: 'pmd',
    component: ShellComponent,
    canActivate: [AuthGuard, ClientGuard],
    children:  [
      {
        path: 'pmd311',
        component: Pmd311Component
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShellRoutingModule {}
