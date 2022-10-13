import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell.component';
import {Bpm000Component} from './modules/bpm/bpm000/bpm000.component';
import {Bpm001Component} from './modules/bpm/bpm001/bpm001.component';
import {KrnicpComponent} from './modules/krn/krnicp/krnicp.component';
import {AccountsComponent} from './modules/krn/accounts/accounts.component';
import {KrnOperationsComponent} from './modules/krn/krn-operations/krn-operations.component';
import {CreateAccountComponent} from './modules/krn/accounts/create-account/create-account.component';

const routes: Routes = [
  {
    path: 'bpm',
    component: ShellComponent,
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
    children:  [
      {
        path: 'accounts',
        component: AccountsComponent
      },
      {
        path: 'addAccount',
        component: CreateAccountComponent
      },
      {
        path: 'operations',
        component: KrnOperationsComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShellRoutingModule {}
