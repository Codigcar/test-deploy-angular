import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessPersonComponent } from './pages/business-person/business-person.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';



@NgModule({
  declarations: [
    BusinessPersonComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule
  ],
  exports:[
    BusinessPersonComponent
  ]
})
export class BusinessPersonModule { }
