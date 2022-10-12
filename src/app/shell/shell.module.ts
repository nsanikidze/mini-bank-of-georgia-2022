import { NgModule } from '@angular/core';

import { ShellComponent } from './shell.component';
import { ShellRoutingModule } from './shell-routing.module';
import {ShellSidebarComponent} from './shell-sidebar/shell-sidebar.component';
import {ShellHeaderComponent} from './shell-header/shell-header.component';
import { SharedModule } from '../shared/shared.module';
import {Bpm000Component} from './modules/bpm/bpm000/bpm000.component';
import {Bpm001Component} from './modules/bpm/bpm001/bpm001.component';
import {CreateAccountComponent} from './modules/krn/accounts/create-account/create-account.component';


@NgModule({
  declarations: [ShellComponent, ShellSidebarComponent, ShellHeaderComponent, Bpm000Component, Bpm001Component, CreateAccountComponent],
  imports: [ShellRoutingModule, SharedModule],
})
export class ShellModule {}
