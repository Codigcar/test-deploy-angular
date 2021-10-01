import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPersonComponent } from './pages/register-person/register-person.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterPersonComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RegisterPersonComponent
  ]
})
export class RegisterPersonModule { }
