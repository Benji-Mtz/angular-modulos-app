import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  // personajes: Personaje[] = [];

  nuevo: Personaje = {
    nombre: 'Maestro Karin',
    poder: 1000
  }
  
  
 
    constructor() {
      // this.personajes = this.dbzService.personajes;
    }

}
