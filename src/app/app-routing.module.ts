import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/auth/login/pages/login/login.component';
import { RegisterBusinessComponent } from './core/business-profile/register-business/pages/register-business/register-business.component';
import { RegisterPersonComponent } from './core/person-profile/register-person/pages/register-person/register-person.component';
import { HomePersonComponent } from './core/person-profile/home-person/pages/home-person/home-person.component';
import { BusinessPersonComponent } from './core/person-profile/business-person/pages/business-person/business-person.component';
import { CitasComponent } from './core/person-profile/cita/pages/citas/citas.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    // pathMatch: 'full'
  },
  {
    path: 'registerProfiles',
    component: RegisterPersonComponent,
    pathMatch: 'full'
  },
  {
    path: 'registerBusiness',
    component: RegisterBusinessComponent,
    pathMatch: 'full'
  },
  {
    path: 'personProfiles',
    component: HomePersonComponent,
    pathMatch: 'full',
  },
  {
    path: 'personProfiles/business/:businessId',
    component: BusinessPersonComponent,
    pathMatch: 'full',
  },
  {
    path: 'personProfiles/business/:businessId/citas',
    component: CitasComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
