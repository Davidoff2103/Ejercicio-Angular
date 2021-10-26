import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  personajeNuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  @Input() personajesComponenteAgregar: Personaje[] = []

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  nuevoPersonaje() {
    if(this.personajeNuevo.nombre.trim().length === 0){
      return;
    }
    this.onNuevoPersonaje.emit(this.personajeNuevo);

    this.personajeNuevo = {
      nombre: '',
      poder: 0
    }
  }

}
