import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ListadoComponent } from '../components/listado/listado.component';

import {ComponentsModule} from '../components/components.module';


@NgModule({
  declarations: [
    HomeComponent,
    SignUpComponent,
    ListadoComponent
  
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    HomeComponent,
  SignUpComponent,
ListadoComponent]
})
export class PagesModule { }
