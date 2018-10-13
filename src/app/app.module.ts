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
import { SpeakerFormComponent } from './components/forms/speaker-form/speaker-form.component';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SettingsSpeakerInputsComponent } from './components/forms/settings-speaker-inputs/settings-speaker-inputs.component';
import { SettingsTeacherInputsComponent } from './components/forms/settings-teacher-inputs/settings-teacher-inputs.component';





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
    SpeakerFormComponent,
    HomeMainComponent,
    SettingsComponent,
    SettingsSpeakerInputsComponent,
    SettingsTeacherInputsComponent,
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
