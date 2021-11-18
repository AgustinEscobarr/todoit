import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.sass']
})
export class ListadoComponent implements OnInit {

  lista:string[]=["Cocina","Heladera","Mesada","Alacena","Horno"]
  borrarArray(){
    this.lista.pop()
  }
  constructor() { }

  ngOnInit(): void {
  }

}
