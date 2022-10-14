/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from '../../../shared/auth-guard.guard';
import {BpmComponent} from './bpm.component';
import {Bpm000Component} from './bpm000/bpm000.component';
import {Bpm001Component} from './bpm001/bpm001.component';
import {ShellComponent} from '../../shell.component';
import {KrnComponent} from '../krn/krn.component';
import {ClientGuard} from '../../client-guard.guard';
import {PmdComponent} from '../pmd/pmd.component';


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
    }
  ]

}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BpmRoutingModule {}


*/
