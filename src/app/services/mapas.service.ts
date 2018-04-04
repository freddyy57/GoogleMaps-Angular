import { Injectable } from '@angular/core';
import { Marcador } from '../interfaces/marcador.interface';

@Injectable()
export class MapasService {

  marcadores:Marcador[] = [];

  constructor() {

    let nuevoMarcador:Marcador = {
      lat:37.205956,
      lng:-1.896827,
      titulo:"Bodegas Gourmet.es",
      draggable:true,
      desc:"Esta es la oficina central de bodegas gourmet.es"
    }

    this.marcadores.push( nuevoMarcador );

   }

   insertarMarcador( marcador:Marcador ) {
     this.marcadores.push( marcador );
     this.guardarMarcadores();
   }

   guardarMarcadores(){
     localStorage.setItem('marcadores', JSON.stringify( this.marcadores ));
   }

   borrarMarcador(idx:number) {
     this.marcadores.splice(idx,1);
     this.guardarMarcadores();
   }

   cargarMarcadores() {

     if(localStorage.getItem('marcadores')){
       this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
     } else {
       this.marcadores = [];
     }

   }

}
