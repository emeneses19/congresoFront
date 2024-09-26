import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriaComponent } from './categoria/categoria.component';
import { InstitucionProcedenciaComponent } from './institucion-procedencia/institucion-procedencia.component';
import { EstadoInscripcionComponent } from './estado-inscripcion/estado-inscripcion.component';
import { MatCard } from '@angular/material/card';
import { LugarProcedenciaComponent } from './lugar-procedencia/lugar-procedencia.component';
import { EventoComponent } from './evento/evento.component';
import { CongresoComponent } from './congreso/congreso.component';

@Component({
  selector: 'app-auxiliares',
  templateUrl: './auxiliares.component.html',
  styleUrl: './auxiliares.component.css'
})
export class AuxiliaresComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(CategoriaComponent);
  }
  openInstitucionProcendia(){
    this.dialog.open(InstitucionProcedenciaComponent);
  }

  openEstadoInscripcion(){
    this.dialog.open(EstadoInscripcionComponent);
  }
  openLugarDeProcedencia(){
    this.dialog.open(LugarProcedenciaComponent);

  }
  openEvento(){
    this.dialog.open(EventoComponent)
  }
  openCongreso(){
    this.dialog.open(CongresoComponent)
  }
}
