import {NgModule, Pipe} from '@angular/core';
import {CommonModule, DecimalPipe} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { AlertComponent } from './alert/alert.component';
import { PopupDirective } from './directives/popup.directive';
import {NumberFormatPipe} from './number-format.pipe';

@NgModule({
  declarations: [ LoaderComponent,  AlertComponent, PopupDirective, NumberFormatPipe],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    LoaderComponent,
    CommonModule,
    ReactiveFormsModule,
    AlertComponent,
    PopupDirective,
    NumberFormatPipe
  ],
  providers: [DecimalPipe]
})
export class SharedModule {}
