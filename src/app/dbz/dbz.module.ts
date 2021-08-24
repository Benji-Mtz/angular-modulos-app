import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Componentes
import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';

// Servicios
import { DbzService } from './services/dbz.service';


@NgModule({
  declarations: [MainPageComponent, PersonajesComponent, AgregarComponent],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    // Unica instancia para todo el modulo dbz o singleton
    DbzService
  ]
})
export class DbzModule { }
