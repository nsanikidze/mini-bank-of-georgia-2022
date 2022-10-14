import { NgModule } from '@angular/core';

import { ShellComponent } from './shell.component';
import { ShellRoutingModule } from './shell-routing.module';
import {ShellSidebarComponent} from './shell-sidebar/shell-sidebar.component';
import {ShellHeaderComponent} from './shell-header/shell-header.component';
import { SharedModule } from '../shared/shared.module';
import {Bpm000Component} from './modules/bpm/bpm000/bpm000.component';
import {Bpm001Component} from './modules/bpm/bpm001/bpm001.component';
import {CreateAccountComponent} from './modules/krn/accounts/create-account/create-account.component';
import {AccountsComponent} from './modules/krn/accounts/accounts.component';
import {KrnicpComponent} from './modules/krn/krnicp/krnicp.component';
import {AuthGuard} from './auth-guard.guard';
import {ClientGuard} from './client-guard.guard';
import {OperationsComponent} from './modules/operations/operations.component';
import {ClientHeaderComponent} from './modules/client-header/client-header.component';
import {Pmd311Component} from './modules/pmd/pmd311/pmd311.component';


@NgModule({
  declarations: [ShellComponent, ShellSidebarComponent, ShellHeaderComponent, Pmd311Component,  Bpm000Component, Bpm001Component, KrnicpComponent, CreateAccountComponent, AccountsComponent, OperationsComponent, ClientHeaderComponent],
  imports: [ShellRoutingModule, SharedModule],
  providers: [AuthGuard, ClientGuard]
})
export class ShellModule {}
