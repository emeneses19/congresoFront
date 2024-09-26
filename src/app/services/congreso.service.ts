import { Injectable } from '@angular/core';
import { CongresoModel } from '../models/congreso.model';
import { Observable, of } from 'rxjs';
import { DateTime } from 'luxon';

@Injectable({
  providedIn: 'root'
})
export class CongresoService {
  listaCongreso: CongresoModel[] = [
  {
    codigoCongreso: '019995222222',
    nombre: 'Congreso 01',
    abierto: true,
    fechaApertura: new Date(),
    fechaCierre: new Date()
  },
  {
    codigoCongreso: '01771142411',
    nombre: 'Congreso 01klklñ',
    abierto: true,
    fechaApertura: new Date(),
    fechaCierre: new Date()
  },
  {
    codigoCongreso: '06600214254',
    nombre: 'Congreso 01',
    abierto: true,
    fechaApertura: new Date(),
    fechaCierre: new Date()
  }

  ];

  constructor() { }
  
   // Método para formatear la fecha cuando sea necesario mostrarla
   formatearFecha(fecha: Date): string {
    return DateTime.fromJSDate(fecha).toFormat('yyyy/MM/dd');
  }

  agregarCongreso(congreso: CongresoModel) {
    this.listaCongreso.push(congreso);
  }
  eliminarCongreso(congreso: CongresoModel) {
    const index = this.listaCongreso.findIndex(item => item === congreso);
    if (index !== -1) {
      this.listaCongreso.splice(index, 1);
    }
  }
  actualizarCongreso(congresoActualizado: CongresoModel) {
    const index = this.listaCongreso.findIndex(item => item.codigoCongreso === congresoActualizado.codigoCongreso);
    if (index !== -1) {
      this.listaCongreso[index] = congresoActualizado;
    }
  }

  obtenerCongreso(): Observable<CongresoModel[]> {
    return of(this.listaCongreso);
  }
  
  filtroCongresoCodigo(codigoIngresado: string): Observable<CongresoModel[]> {
    const listaFiltrada = this.listaCongreso.filter(congreso => congreso.codigoCongreso.includes(codigoIngresado));
    if (listaFiltrada.length > 0) {
      return of(listaFiltrada);
    } else {
      return of([]);
    }
  }
  filtroCongresoNombre(nombreIngresado: string): Observable<CongresoModel[]> {
    const nombreIngresadoMinusculas = nombreIngresado.toLowerCase();
    const listaFiltrada = this.listaCongreso.filter(congreso => congreso.nombre.toLowerCase().includes(nombreIngresadoMinusculas));
    if (listaFiltrada.length > 0) {
      return of(listaFiltrada);
    } else {
      return of([]);
    }

  }
}
