import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ti-logistics-hub-landingpage';
  numero:number=10;
  sumaYResta(valid:boolean){
    (valid?this.numero+=1:this.numero-=1)
  }
  mensaje:string="'Hola hola que tal'";
  cambiarMensaje(){
    this.mensaje="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid reprehenderit fugit provident!"
  }
}
