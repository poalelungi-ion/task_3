import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { StatsDashboardComponent } from './dashboard/stats-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AchievementsListComponent } from './achievements/achievements-list.component';
import { LoginComponent } from './login/login.component';
import { MyDashboardComponent } from './dashboard/my-dashboard/my-dashboard.component';

import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StatsDashboardComponent,
    UserProfileComponent,
    AchievementsListComponent,
    LoginComponent,
    MyDashboardComponent,
    WeatherComponent
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
