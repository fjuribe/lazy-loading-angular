import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';
  nombre:any="";
  cadena:number;
  mensaje:string=""


estimar(){

		  if(this.nombre.length>0) {
		  		this.cadena=1
		  		this.mensaje=`tiene ${this.nombre.length} caracteres`
		  	}else{
		  		this.cadena=2
		  		this.mensaje="esta vacio"
		  	  }
	
 }
}
