import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario';
import { SignUpService } from 'src/app/pages/services/sign-up.service';
import { Fullname } from '../../model/fullname';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
let formulario;
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  hide = true;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private signUpService: SignUpService) {}
  fullname1:Fullname={
    name:'',
    lastname:'',
  }
  usuario1: Usuario = {
    email: '',
    fullname: `${this.fullname1.name} ${this.fullname1.lastname}`,
    address: '',
    cellphone: '',
    observations: '',
    password: '',
  };


  ngOnInit(): void {
    
    
  }
}
