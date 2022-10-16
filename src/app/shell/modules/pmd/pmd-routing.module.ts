import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from '../../../shared/authorization/auth-guard.guard';
import {ClientGuard} from '../../client-guard.guard';
import {Pmd311Component} from './pmd311/pmd311.component';
import {PmdComponent} from './pmd.component';

const routes: Routes = [
  {
    path: '',
    component: PmdComponent,
    children: [
      {
        path: 'pmd311',
        component: Pmd311Component
      },
      {
        path: '',
        redirectTo: 'pmd311',
        pathMatch: 'pull'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PmdRoutingModule {}
