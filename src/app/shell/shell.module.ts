import { NgModule } from '@angular/core';

import { ShellComponent } from './shell.component';
import { ShellRoutingModule } from './shell-routing.module';
import {ShellSidebarComponent} from './shell-sidebar/shell-sidebar.component';
import {ShellHeaderComponent} from './shell-header/shell-header.component';

@NgModule({
  declarations: [ShellComponent, ShellSidebarComponent, ShellHeaderComponent],
  imports: [ShellRoutingModule],
})
export class ShellModule {}
