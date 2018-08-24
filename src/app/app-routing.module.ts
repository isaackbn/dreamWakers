import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component'
import { DetailsComponent} from './details/details.component'
import { FlashchatsComponent} from './flashchats/flashchats.component'
import { PlanComponent} from './plan/plan.component'
import { AuthComponent } from './auth/auth.component'
import { AuthGuard } from './auth.guard'
import { AuthRedirectedComponent } from './auth-redirected/auth-redirected.component'

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  {
    path:'auth',
    component: AuthComponent
  },
  {
    path:'auth/redirected',
    component: AuthRedirectedComponent
  },
  {
    path:'home',
    //canActivate:[AuthGuard],
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
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
