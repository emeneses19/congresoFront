import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CongresoModel } from '../../../../models/congreso.model';

@Component({
  selector: 'app-lista-congreso',
  templateUrl: './lista-congreso.component.html',
  styleUrl: './lista-congreso.component.css'
})
export class ListaCongresoComponent {
  @Input() listaDeCongreso: CongresoModel[] = [];
  @Output() congresoEliminar = new EventEmitter();
  @Output() congresoActualizar = new EventEmitter();
  constructor() {

  }

  eliminarCongreso(congreso: CongresoModel) {
    this.congresoEliminar.emit(congreso);
  }


}
