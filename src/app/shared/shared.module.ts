import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import {AppModule} from '../app.module';

@NgModule({
  declarations: [ LoaderComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    LoaderComponent,
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
