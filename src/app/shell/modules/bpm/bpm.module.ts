import { NgModule } from '@angular/core';
import {AuthGuard} from '../../../shared/auth-guard.guard';
import {SharedModule} from '../../../shared/shared.module';
import {Bpm001Component} from './bpm001/bpm001.component';
import {Bpm000Component} from './bpm000/bpm000.component';



@NgModule({
    declarations: [Bpm001Component, Bpm000Component],
    imports: [SharedModule],
    exports: [
        Bpm000Component
    ],
    providers: [AuthGuard]
})
export class BpmModule {}
