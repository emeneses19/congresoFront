import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2'
import { InstitucionProcedenciaModel } from '../../../../models/institucion-procedencia.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnChanges {
  @Input() listaDeInstitucionesDeProcedencia: InstitucionProcedenciaModel[] = [];
  @Output() institucionProcedenciaEliminar = new EventEmitter();
  @Output() institucionProcedenciaActualizar = new EventEmitter();
  constructor() {
  }
  ngOnChanges(): void {
  }

  eliminarInstitucionProcedencia(institucionProcedencia: InstitucionProcedenciaModel) {
    this.institucionProcedenciaEliminar.emit(institucionProcedencia);
  }

}
