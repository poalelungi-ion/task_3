import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatsDashboardComponent } from './dashboard/stats-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AchievementsListComponent } from './achievements/achievements-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: StatsDashboardComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'achievements', component: AchievementsListComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
