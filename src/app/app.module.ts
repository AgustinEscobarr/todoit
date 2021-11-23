import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
//import { ListadoComponent } from './components/listado/listado.component';
import { SignUpService } from './pages/services/sign-up.service';
import { HomeService } from './pages/services/home.service';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogRegisterComponent } from './components/popUp/dialog-register/dialog-register.component';
@NgModule({
  
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PagesModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [SignUpService, HomeService],
  bootstrap: [AppComponent],
  entryComponents:[DialogRegisterComponent]
})
export class AppModule { }
