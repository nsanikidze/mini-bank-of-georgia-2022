import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { ShellComponent } from './shell/shell.component';
import { ShellHeaderComponent } from './shell/shell-header/shell-header.component';
import { ShellSidebarComponent } from './shell/shell-sidebar/shell-sidebar.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthorizationComponent } from './shared/authorization/authorization.component';
import { LoaderComponent } from './shared/loader/loader.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {UrlInterceptorService} from './shared/url-interseptor.service';
import {AuthInterceptorService} from './shared/auth-interseptor.service';
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
