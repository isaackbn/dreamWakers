import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PublicComponent } from './public/public.component';

import { HttpClientModule } from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { BackgroundComponent } from './background/background.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AuthComponent } from './auth/auth.component'


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UsersComponent,
    DetailsComponent,
    PublicComponent,
    BackgroundComponent,
    AlertsComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
