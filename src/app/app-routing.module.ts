import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './components/home/home.component'
import { DetailsComponent} from './components/details/details.component'
import { FlashchatsComponent} from './components/flashchats/flashchats.component'
import { PlanComponent} from './components/plan/plan.component'
import { AuthComponent } from './components/auth/auth.component'
import { AuthGuard } from './guards/auth.guard'
import { AuthRedirectedComponent } from './components/auth-redirected/auth-redirected.component'
import { LoggedGuard } from './guards/logged.guard'
import { TopbarComponent } from './components/topbar/topbar.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  {
    path:'auth',
    canActivate:[LoggedGuard],
    component: AuthComponent
  },
  {
    path:'auth/redirected',
    component: AuthRedirectedComponent
  },
  {
    path:'home',
    canActivate:[AuthGuard],
    component: HomeComponent
  },
  {
    path:'home/search/:word',
    canActivate:[AuthGuard],
    component: HomeComponent
  },
  {
    path:'details/:id',
    canActivate:[AuthGuard],
    component: DetailsComponent
  },
  {
    path:'flashchats',
    canActivate:[AuthGuard],
    component: FlashchatsComponent
  },
  {
    path:'plan',
    canActivate:[AuthGuard],
    component: PlanComponent
  }
  // },  
  // {
  //   path:'auth',
  //   canActivate:[AuthGuard],
  //   component: TopbarComponent
  // },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
