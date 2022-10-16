import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Bpm001Component } from './bpm001/bpm001.component';
import { Bpm000Component } from './bpm000/bpm000.component';
import { BpmComponent } from './bpm.component';
import { BpmRoutingModule } from './bpm-routing.module';


@NgModule({
    declarations: [Bpm001Component, Bpm000Component, BpmComponent],
    imports: [SharedModule, BpmRoutingModule]
})

export class BpmModule {}
