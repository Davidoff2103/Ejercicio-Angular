import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ContadorModule } from './contador/contador.module';
import { ListadoComponent } from './heroes/listado/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
