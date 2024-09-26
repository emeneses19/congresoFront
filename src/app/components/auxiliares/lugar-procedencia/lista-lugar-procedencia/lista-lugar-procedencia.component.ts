import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LugarProcedenciaModel } from '../../../../models/lugar-procedencia.models';

@Component({
  selector: 'app-lista-lugar-procedencia',
  templateUrl: './lista-lugar-procedencia.component.html',
  styleUrl: './lista-lugar-procedencia.component.css'
})
export class ListaLugarProcedenciaComponent {
  @Input() listaDeLugaresDeProcedencia: LugarProcedenciaModel[] = [];
  @Output() lugarProcedenciaEliminar = new EventEmitter();
  @Output() lugarProcedenciaActualizar = new EventEmitter();
  constructor() {

  }

  eliminarLugarProcedencia(lugarProcedencia: LugarProcedenciaModel) {
    this.lugarProcedenciaEliminar.emit(lugarProcedencia);
  }


}
