import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { AlertComponent } from './alert/alert.component';
import { PopupDirective } from './directives/popup.directive';

@NgModule({
  declarations: [ LoaderComponent,  AlertComponent, PopupDirective],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    LoaderComponent,
    CommonModule,
    ReactiveFormsModule,
    AlertComponent,
    PopupDirective
  ],
})
export class SharedModule {}
