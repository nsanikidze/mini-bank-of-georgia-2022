import { NgModule } from '@angular/core';

import { ShellComponent } from './shell.component';
import { ShellRoutingModule } from './shell-routing.module';
import {ShellSidebarComponent} from './shell-sidebar/shell-sidebar.component';
import {ShellHeaderComponent} from './shell-header/shell-header.component';
import { SharedModule } from '../shared/shared.module';
import {AuthGuard} from '../shared/auth-guard.guard';
import {ClientGuard} from './client-guard.guard';
import {ClientHeaderComponent} from './client-header/client-header.component';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [ShellComponent, ShellSidebarComponent, ShellHeaderComponent, ClientHeaderComponent],
  imports: [ShellRoutingModule, CommonModule],
  providers: [AuthGuard, ClientGuard]
})
export class ShellModule {}
