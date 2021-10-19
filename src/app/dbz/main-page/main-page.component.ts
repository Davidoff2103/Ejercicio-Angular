import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  Personajes: Personaje[] = [personaje1, personaje2, personaje3, personaje4]
  constructor() { }

  nuevoPersonaje(itemForm: NgForm){
    let personajeNuevo:Personaje = {
      nombre:itemForm.value.nombre,
      poder: itemForm.value.poder
    }
    this.Personajes.push(personajeNuevo);
  }
}

let personaje1:Personaje = {
  nombre:'Goku',
  poder: 100
}

let personaje2:Personaje = {
  nombre:'Vegetta',
  poder: 90
}

let personaje3:Personaje = {
  nombre:'Freezer',
  poder: 95
}

let personaje4:Personaje = {
  nombre:'Gohan',
  poder: 97
}

interface Personaje {
  nombre: string,
  poder: number
};