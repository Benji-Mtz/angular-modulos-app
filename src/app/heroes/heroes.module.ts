import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Heroecomponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    // Declaraciones del conjunto de modulos que contenemos
    declarations: [
        Heroecomponent,
        ListadoComponent
    ],
    // Los modulos contenidos para usar en otro lugar de la app
    exports: [
        ListadoComponent
    ],
    // importaciones de modulos en comun para el funcionamiento de directivas tipo ngfor, ngif etc
    imports: [
        CommonModule
    ]
})
export class HeroesModule {

}