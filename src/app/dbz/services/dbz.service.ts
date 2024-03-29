import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }
      ];
    // Funcion getter para mostrar personajes en personajes
    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor() { 
      // console.log("Servicio Inicializado!")
    }

    // Funcion para agregar personajes en agregar
    agregarPersonaje( dataPersonaje: Personaje) {
        this._personajes.push( dataPersonaje );
    }

}