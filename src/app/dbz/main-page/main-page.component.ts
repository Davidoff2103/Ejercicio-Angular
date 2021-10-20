import {
  Component
} from '@angular/core';
import {
  NgForm
} from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  personaje1: Personaje = {
    nombre: 'Goku',
    poder: 100
  }

  personaje2: Personaje = {
    nombre: 'Vegetta',
    poder: 90
  };

  personaje3: Personaje = {
    nombre: 'Freezer',
    poder: 95
  };

  personaje4: Personaje = {
    nombre: 'Gohan',
    poder: 97
  };

  Personajes: Personaje[] = [this.personaje1, this.personaje2, this.personaje3, this.personaje4];

  nuevoPersonaje(itemForm: NgForm) {
    let personajeNuevo: Personaje = {
      nombre: itemForm.value.nombre,
      poder: itemForm.value.poder
    };
    this.Personajes.push(personajeNuevo);
  };
};

interface Personaje {
  nombre: string,
    poder: number
};
