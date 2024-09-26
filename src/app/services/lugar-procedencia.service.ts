import { Injectable } from '@angular/core';
import { LugarProcedenciaModel } from '../models/lugar-procedencia.models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LugarProcedenciaService {

  listaLugarProcedencia: LugarProcedenciaModel[] = [
    {
      codigoLugarProcedencia: '20240703125',
      nombre: 'Jinin-Huancayo-El Tambo',
    }
  ];

  constructor() { }

  agregarLugarProcedencia(lugarProcedencia: LugarProcedenciaModel) {
    this.listaLugarProcedencia.push(lugarProcedencia);
  }
  eliminarLugarProcedencia(lugarProcedencia: LugarProcedenciaModel) {
    const index = this.listaLugarProcedencia.findIndex(item => item === lugarProcedencia);
    if (index !== -1) {
      this.listaLugarProcedencia.splice(index, 1);
    }
  }
  actualizarLugarProcedencia(lugarProcedenciaActualizado: LugarProcedenciaModel) {
    const index = this.listaLugarProcedencia.findIndex(item => item.codigoLugarProcedencia === lugarProcedenciaActualizado.codigoLugarProcedencia);
    if (index !== -1) {
      this.listaLugarProcedencia[index] = lugarProcedenciaActualizado;
    }
  }

  obtenerLugaresDeProcedencia(): Observable<LugarProcedenciaModel[]> {
    return of(this.listaLugarProcedencia);
  }
  filtroLugarProcedenciaCodigo(codigoIngresado: string): Observable<LugarProcedenciaModel[]> {
    const listaFiltrada = this.listaLugarProcedencia.filter(lugar => lugar.codigoLugarProcedencia.includes(codigoIngresado));
    if (listaFiltrada.length > 0) {
      return of(listaFiltrada);
    } else {
      return of([]);
    }
  }
  filtroLugarProcedenciaNombre(nombreIngresado: string): Observable<LugarProcedenciaModel[]> {
    const nombreIngresadoMinusculas = nombreIngresado.toLowerCase();
    const listaFiltrada = this.listaLugarProcedencia.filter(lugar => lugar.nombre.toLowerCase().includes(nombreIngresadoMinusculas));
    if (listaFiltrada.length > 0) {
      return of(listaFiltrada);
    } else {
      return of([]);
    }

  }
}
