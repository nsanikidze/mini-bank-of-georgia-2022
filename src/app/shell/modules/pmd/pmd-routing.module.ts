import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShellComponent} from '../../shell.component';
import {AuthGuard} from '../../../shared/auth-guard.guard';
import {ClientGuard} from '../../client-guard.guard';
import {Pmd311Component} from './pmd311/pmd311.component';
import {ShellRoutingModule} from '../../shell-routing.module';
import {PmdComponent} from './pmd.component';



const routes: Routes = [ {
    path: 'pmd',
    component: PmdComponent,
    canActivate: [AuthGuard, ClientGuard],
    children:  [{
      path: 'pmd311',
      component: Pmd311Component
    },
      {
        path: '',
        component: PmdComponent
      }]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PmdRoutingModule {}
