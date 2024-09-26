import { Injectable } from '@angular/core';
import { EstadoInscripcionModel } from '../models/estado-inscripcion.model';

@Injectable({
  providedIn: 'root'
})
export class EstadoInscripcionService {

  listaInscripcion: EstadoInscripcionModel[] = [
    { codInscripcion: '111', descripcion: '1ALUMNO' },
    { codInscripcion: '', descripcion: '2docente' },
    { codInscripcion: '', descripcion: '3docente' },
    { codInscripcion: '', descripcion: '6docente' },
    { codInscripcion: '', descripcion: '4docente' },
    { codInscripcion: '', descripcion: '3docente' },
    { codInscripcion: '', descripcion: '2docente' },
  ];

  constructor() { }

  obtenerInscripcion(){
    return this.listaInscripcion.slice();
  }

  eliminarInscripcion(id: number){
    this.listaInscripcion.splice(id,1);
  }

  agregarInscripcion(inscripcion: EstadoInscripcionModel){
    this.listaInscripcion.push(inscripcion);
  }
}
