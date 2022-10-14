import { NgModule } from '@angular/core';

import { ShellComponent } from './shell.component';
import { ShellRoutingModule } from './shell-routing.module';
import {ShellSidebarComponent} from './shell-sidebar/shell-sidebar.component';
import {ShellHeaderComponent} from './shell-header/shell-header.component';
import { SharedModule } from '../shared/shared.module';
import {AuthGuard} from '../shared/auth-guard.guard';
import {ClientGuard} from './client-guard.guard';
import {PmdModule} from './modules/pmd/pmd.module';
import {ClientHeaderComponent} from './client-header/client-header.component';
import {BpmComponent} from './modules/bpm/bpm.component';
import {KrnComponent} from './modules/krn/krn.component';
import {PmdComponent} from './modules/pmd/pmd.component';
import {BpmModule} from './modules/bpm/bpm.module';
import {KrnModule} from './modules/krn/krn.module';


@NgModule({
  declarations: [ShellComponent, ShellSidebarComponent, ShellHeaderComponent, ClientHeaderComponent, BpmComponent, KrnComponent, PmdComponent],
  imports: [ShellRoutingModule, SharedModule,  BpmModule, BpmModule, KrnModule],
  exports: [
    ShellComponent
  ],
  providers: [AuthGuard, ClientGuard]
})
export class ShellModule {}
