import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell.component';
import {Bpm000Component} from './modules/bpm/bpm000/bpm000.component';
import {Bpm001Component} from './modules/bpm/bpm001/bpm001.component';
import {KrnicpComponent} from './modules/krn/krnicp/krnicp.component';
import {KrnAccountsComponent} from './modules/krn/krn-accounts/krn-accounts.component';
import {KrnOperationsComponent} from './modules/krn/krn-operations/krn-operations.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children:  [{
        path: 'bpm000',
        component: Bpm000Component
      },
      {
        path: 'bpm001',
        component: Bpm001Component
      },
      {
        path: 'krnicp',
        component: KrnicpComponent
      },
      {
        path: 'accounts',
        component: KrnAccountsComponent
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
