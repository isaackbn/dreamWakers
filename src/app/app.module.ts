import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { AppComponent } from './app.component';

import { TopbarComponent } from './components/topbar/topbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { HomeFilterComponent } from './components/home-filter/home-filter.component';
import { HomeSuggestsComponent } from './components/home-suggests/home-suggests.component';
import { FlashchatsComponent } from './components/flashchats/flashchats.component';
import { HomeSearchComponent } from './components/home-search/home-search.component';
import { AuthRedirectedComponent } from './components/auth-redirected/auth-redirected.component';


import { AuthService } from './services/auth.service'
import { CookieService } from 'ngx-cookie-service';

import { AuthGuard } from './guards/auth.guard';
import { LoggedGuard } from './guards/logged.guard';
import { SpeakerFilterFormComponent } from './components/forms/speaker-filter-form/speaker-filter-form.component';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { dwFormComponent } from './components/dwForm/dwForm.component';
import { DwFormSpeakerInputsComponent } from './components/forms/dwForm-speaker-inputs/dwForm-speaker-inputs.component';
import { DwFormTeacherInputsComponent } from './components/forms/dwForm-teacher-inputs/dwForm-teacher-inputs.component';





@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AuthComponent,
    HomeComponent,
    TopbarComponent,
    HomeFilterComponent,
    HomeSuggestsComponent,
    FlashchatsComponent,
    HomeSearchComponent,
    AuthRedirectedComponent,
    SpeakerFilterFormComponent,
    HomeMainComponent,
    dwFormComponent,
    DwFormSpeakerInputsComponent,
    DwFormTeacherInputsComponent,
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
