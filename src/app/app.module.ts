import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Google Maps Module
import { AgmCoreModule } from '@agm/core';

//servicios
import {MapasService} from './services/mapas.service';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCVfA85fnBi5uktIIbGG002UJNrtcZ0Z5Y'
    })
  ],
  providers: [ MapasService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
