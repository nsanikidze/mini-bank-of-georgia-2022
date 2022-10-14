import { NgModule } from '@angular/core';

import { Pmd311Component } from './pmd311/pmd311.component';
import { SharedModule } from '../../../shared/shared.module';
import {AuthGuard} from '../../../shared/auth-guard.guard';
import {ClientGuard} from '../../client-guard.guard';
import {PmdRoutingModule} from './pmd-routing.module';
import {PmdComponent} from './pmd.component';


@NgModule({
  declarations: [Pmd311Component],
  imports: [SharedModule, PmdRoutingModule],
  providers: [AuthGuard, ClientGuard]
})
export class PmdModule {}
