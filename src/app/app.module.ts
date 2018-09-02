import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { AppComponent } from './app.component';

import { TopbarComponent } from './components/topbar/topbar.component';
import { DetailsComponent } from './components/details/details.component';
import { PlanComponent } from './components/plan/plan.component';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { HomePanelComponent } from './components/home-panel/home-panel.component';
import { HomeSuggestsComponent } from './components/home-suggests/home-suggests.component';
import { FlashchatsComponent } from './components/flashchats/flashchats.component';
import { HomeSearchComponent } from './components/home-search/home-search.component';
import { AuthRedirectedComponent } from './components/auth-redirected/auth-redirected.component';


import { AuthService } from './services/auth.service'
import { CookieService } from 'ngx-cookie-service';

import { AuthGuard } from './guards/auth.guard';
import { LoggedGuard } from './guards/logged.guard';





@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    AuthComponent,
    PlanComponent,
    HomeComponent,
    TopbarComponent,
    HomePanelComponent,
    HomeSuggestsComponent,
    FlashchatsComponent,
    HomeSearchComponent,
    AuthRedirectedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [AuthService, AuthGuard, LoggedGuard ,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
