import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './shared/components/components.module';
import { LoginModule } from './core/auth/login/login.module';
import { RegisterPersonModule } from './core/person-profile/register-person/register-person.module';
import { RegisterBusinessModule } from './core/business-profile/register-business/register-business.module';
import { HomePersonModule } from './core/person-profile/home-person/home-person.module';
import { BusinessPersonModule } from './core/person-profile/business-person/business-person.module';
import { HttpClientModule } from '@angular/common/http';
import { CitaModule } from './core/person-profile/cita/cita.module';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ComponentsModule,
    

    LoginModule,
    RegisterPersonModule,
    RegisterBusinessModule,
    HomePersonModule,
    BusinessPersonModule,
    CitaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
