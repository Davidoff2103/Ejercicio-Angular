import { Component } from "@angular/core";

@Component({
    selector: 'heroe-component',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    nombre: string = 'Recycled';
    edad: number = 28;
  
    nombreEdad(){
        return 'Su nombre es '+this.nombre+' y tiene '+ this.edad + ' años.';
    }
    nombreMayus(){
        return 'Su nombre en mayúsculaes es '+this.nombre.toUpperCase()+'.';
    }
    cambiarNombre(){
        this.nombre = 'Jorgito';
    }
    cambiarEdad(){
        this.edad = 30;
    }
    reiniciar(){
        this.nombre = 'Recycled';
        this.edad = 28;
    }
}