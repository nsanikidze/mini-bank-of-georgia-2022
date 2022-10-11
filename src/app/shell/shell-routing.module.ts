import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell.component';
import {Bpm000Component} from './modules/bpm/bpm000/bpm000.component';
import {Bpm001Component} from './modules/bpm/bpm001/bpm001.component';

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
      }]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShellRoutingModule {}
