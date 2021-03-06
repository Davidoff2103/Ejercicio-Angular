import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Superman', 'IronMan', 'Batman', 'Hulk'];
  borrado: string = "";
  seleccionado: string = "";

  borrarHeroe(){
    if(this.heroes.length == 0){
      this.borrado = '';
    } else{
      this.borrado = this.heroes[0];
    }
    this.heroes.splice(0,1);
  }
  seleccionHeroe(heroe: string) {
    this.seleccionado = heroe;
  }
  resetearLista(){
    this.heroes = ['Spiderman', 'Superman', 'IronMan', 'Batman', 'Hulk'];
    this.borrado = "";
    this.seleccionado = "";
  }
}
