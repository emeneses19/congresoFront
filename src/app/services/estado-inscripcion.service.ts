import { Injectable } from '@angular/core';
import { EstadoInscripcionModel } from '../models/estado-inscripcion.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoInscripcionService {

  listaEstadoInscripcion: EstadoInscripcionModel[] = [
    { codInscripcion: '111', descripcion: 'Estado de Inscripcion 1' }
  ];

  constructor() { }

  obtenerEstadoInscripcion(): Observable<EstadoInscripcionModel[]> {
    return of(this.listaEstadoInscripcion);
  }

  eliminarEstaInscripcion(estadoInscripcion: EstadoInscripcionModel){
    const index = this.listaEstadoInscripcion.findIndex(estadoInc => {
      return estadoInc === estadoInscripcion;
    });
    
    if(index!==-1){
      this.listaEstadoInscripcion.splice(index,1);

    }
  }

  actualizarEstaInscripcion(estadoInscripcionAct: EstadoInscripcionModel) {
    const index = this.listaEstadoInscripcion.findIndex(estadoIns => 
      estadoIns.codInscripcion === estadoInscripcionAct.codInscripcion);
    if (index !== -1) {
      this.listaEstadoInscripcion[index] = estadoInscripcionAct;
    }
  }


  agregarInscripcion(estadoInscripcion: EstadoInscripcionModel) {
    this.listaEstadoInscripcion.push(estadoInscripcion);
  }
}
