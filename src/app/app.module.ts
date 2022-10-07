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
import {AuthInterceptorService} from './shared/authorization/auth-interseptor.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ShellComponent,
    ShellHeaderComponent,
    ShellSidebarComponent,
    LoginComponent,
    RegisterComponent,
    AuthorizationComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
