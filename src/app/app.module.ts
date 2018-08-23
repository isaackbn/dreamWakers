import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { TopbarComponent } from './topbar/topbar.component';
import { DetailsComponent } from './details/details.component';
import { PlanComponent } from './plan/plan.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { HomePanelComponent } from './home-panel/home-panel.component';
import { FormsLoginComponent } from './forms-login/forms-login.component';
import { HomeSuggestsComponent } from './home-suggests/home-suggests.component';
import { FlashchatsComponent } from './flashchats/flashchats.component';


import { AuthService } from './auth.service'

import { AuthGuard } from './auth.guard';
import { HomeSearchComponent } from './home-search/home-search.component';
import { AuthRedirectComponent } from './auth-redirect/auth-redirect.component';



@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    AuthComponent,
    PlanComponent,
    HomeComponent,
    TopbarComponent,
    HomePanelComponent,
    FormsLoginComponent,
    HomeSuggestsComponent,
    FlashchatsComponent,
    HomeSearchComponent,
    AuthRedirectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
