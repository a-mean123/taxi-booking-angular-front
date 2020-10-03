import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './client/header/header.component';
import { CoverComponent } from './client/cover/cover.component';
import { FormComponent } from './client/form/form.component';
import { OurTaxiComponent } from './client/our-taxi/our-taxi.component';
import { CounterComponent } from './client/counter/counter.component';
import { ContactComponent } from './client/contact/contact.component';
import { FooterComponent } from './client/footer/footer.component';

import { GestionContactComponent } from './admin/gestion-contact/gestion-contact.component';
import { GestionReservationComponent } from './admin/gestion-reservation/gestion-reservation.component';
import { NavbarComponent } from './admin/navbar/navbar.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    AdminComponent,

    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    CoverComponent,
    FormComponent,
    OurTaxiComponent,
    CounterComponent,
    ContactComponent,
    FooterComponent,

    GestionContactComponent,
    GestionReservationComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
