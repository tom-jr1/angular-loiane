import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CursosListarComponent} from "./cursos-listar/cursos-listar.component";
import {CursosComponent} from "./cursos.component";
import {CursosFormComponent} from "./cursos-form/cursos-form.component";
import {TestePipe} from "../teste.pipe";
import {UppercasePipe} from "./pipes/uppercase.pipe";



@NgModule({
  declarations: [
    CursosListarComponent,
    CursosComponent,
    CursosFormComponent,
    TestePipe,
    UppercasePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [CursosComponent]
})
export class CursosModule {
}
