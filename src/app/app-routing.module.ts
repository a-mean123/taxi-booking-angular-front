import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { GestionContactComponent } from './admin/gestion-contact/gestion-contact.component';
import { GestionReservationComponent } from './admin/gestion-reservation/gestion-reservation.component';

import { ClientComponent } from './client/client.component';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from './services/auth.guard';

const routes: Routes = [

  {path: '' , component: ClientComponent},


  {path: 'admin' ,  canActivate: [AuthGuard] ,component: AdminComponent , children : [


      {path: 'contact' , component: GestionContactComponent},
      {path: '' , component: GestionReservationComponent}

  ]},



  {path: 'login' , component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
