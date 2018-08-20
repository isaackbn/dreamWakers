import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent} from './users/users.component'
import { DetailsComponent} from './details/details.component'
import { PublicComponent} from './public/public.component'
import { AlertsComponent} from './alerts/alerts.component'
import { AuthComponent } from './auth/auth.component'

const routes: Routes = [
  {
    path:'',
    component: UsersComponent
  },
  {
    path:'details/:id',
    component: DetailsComponent
  },
  {
    path:'public',
    component: PublicComponent
  },
  {
    path:'alerts',
    component: AlertsComponent
  },
  {
    path:'auth',
    component: AuthComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
