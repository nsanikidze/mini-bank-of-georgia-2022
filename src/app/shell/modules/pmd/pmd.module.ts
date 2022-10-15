import { NgModule } from '@angular/core';

import { Pmd311Component } from './pmd311/pmd311.component';
import { SharedModule } from '../../../shared/shared.module';
import {PmdRoutingModule} from './pmd-routing.module';
import {PmdComponent} from './pmd.component';

@NgModule({
  declarations: [PmdComponent, Pmd311Component],
  imports: [SharedModule, PmdRoutingModule],
})
export class PmdModule {}
