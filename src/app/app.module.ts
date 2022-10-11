import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import {AuthModule} from './auth/auth.modul';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core.module';
import {ShellModule} from './shell/shell.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule,
    SharedModule,
    CoreModule,
    ShellModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
