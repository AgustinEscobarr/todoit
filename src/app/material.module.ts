import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
   
    
  ],
  exports:[
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
   
  ]
})
export class MaterialModule { }
