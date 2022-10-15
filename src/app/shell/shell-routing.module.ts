import {ShellComponent} from './shell.component';
import {AuthGuard} from '../shared/auth-guard.guard';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ClientGuard} from './client-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'bpm',
        loadChildren: () => import('./modules/bpm/bpm.module').then((m) => m.BpmModule),
        data: { preload: true },
      },
      {
        path: 'krn',
        loadChildren: () => import('./modules/krn/krn.module').then((m) => m.KrnModule),
        data: { preload: true },
        canActivate: [ClientGuard]
      },
      {
        path: 'pmd',
        loadChildren: () => import('./modules/pmd/pmd.module').then((m) => m.PmdModule),
        data: { preload: true },
        canActivate: [ClientGuard]
      },
      {
        path: '',
        redirectTo: 'bpm',
        pathMatch: 'full',
      },
    ],
  },
 /* {
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

  }*/
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ShellRoutingModule {}
