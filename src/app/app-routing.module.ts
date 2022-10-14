import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShellComponent} from './shell/shell.component';
import {AuthGuard} from './shared/auth-guard.guard';
import {AuthComponent} from './auth/auth.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
