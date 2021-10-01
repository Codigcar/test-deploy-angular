import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitasComponent } from './pages/citas/citas.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
  declarations: [
    CitasComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule,
  ],
  exports:[
    CitasComponent
  ]
})
export class CitaModule { }
