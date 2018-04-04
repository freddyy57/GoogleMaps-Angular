import { Component } from '@angular/core';
import { MapasService } from './services/mapas.service';
import { Marcador } from './interfaces/marcador.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number = 37.205956;
  lng: number = -1.896827;
  zoom:number = 12;

  marcadorSel:any = null;
  draggable:string = "1";

  constructor( private _ms:MapasService ) {
    this._ms.cargarMarcadores();

  }

  clickMapa( evento ) {

    let nuevoMarcador:Marcador ={
      lat: evento.coords.lat,
      lng: evento.coords.lng,
      titulo: "Sin Titulo",
      draggable:true
    }

    this._ms.insertarMarcador( nuevoMarcador );

  //  console.log( evento );

  }

  clickMarcador( marcador:Marcador, i:number ) {
    //console.log("Este es el marcador",marcador,"Este el index",i);
    this.marcadorSel = marcador;
    if(this.marcadorSel.draggable) {
      this.draggable = "1";
    }else {
      this.draggable = "0";
    }
  }


  dragEndMarcador( marcador:Marcador, evento) {

    console.log(marcador,"este es el evento",evento);
    let lat = evento.coords.lat;
    //console.log("latitud",lat);
    let lng = evento.coords.lng;

    marcador.lat = lat;
    marcador.lng = lng;

    this._ms.guardarMarcadores();

  }

  cambiarDraggable(){
    console.log(this.draggable);
    if( this.draggable == "1") {
      this.marcadorSel.draggable = true;
    } else {
      this.marcadorSel.draggable = false;
    }
  }


}
