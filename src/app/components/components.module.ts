import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLandingComponent } from './header-landing/header-landing.component';
import { FormComponent } from './form/form.component';
import { MaterialModule } from '../material.module';
import { AppRoutingModule } from '../app-routing.module';
import { DialogRegisterComponent } from './popUp/dialog-register/dialog-register.component';






@NgModule({
  
  declarations: [HeaderLandingComponent, FormComponent, DialogRegisterComponent
  ],
  imports: [
    CommonModule,MaterialModule,AppRoutingModule
  ],
  exports:[
    HeaderLandingComponent, FormComponent
  ]
})
export class ComponentsModule { }
