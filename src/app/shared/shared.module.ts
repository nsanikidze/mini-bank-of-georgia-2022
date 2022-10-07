import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import {AppModule} from '../app.module';
import {AlertComponent} from './alert/alert.component';

@NgModule({
  declarations: [ LoaderComponent,  AlertComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    LoaderComponent,
    CommonModule,
    ReactiveFormsModule,
    AlertComponent,
  ],
})
export class SharedModule {}
