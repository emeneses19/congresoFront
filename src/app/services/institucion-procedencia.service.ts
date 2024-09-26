import { Injectable } from '@angular/core';
import { InstitucionProcedenciaModel } from '../models/institucion-procedencia.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstitucionProcedenciaService {
  listaInstitucionProcedencia: InstitucionProcedenciaModel[] = [
    {
      codProcedencia: '20240703125',
      nombre: 'UTP',
    }
  ];
  

  constructor() {
   }
  agregarInstitucionProcedencia(institucionProcedencia: InstitucionProcedenciaModel){
    this.listaInstitucionProcedencia.push(institucionProcedencia);
  }
  eliminarInstitucionProcedencia(institucionProcedencia: InstitucionProcedenciaModel){
    const index = this.listaInstitucionProcedencia.findIndex(item => item === institucionProcedencia);
    if (index !== -1) {
      this.listaInstitucionProcedencia.splice(index, 1);
    }
  }
  actualizarInstitucionProcedencia(institucionProcedenciaActualizado: InstitucionProcedenciaModel){
    const index = this.listaInstitucionProcedencia.findIndex(item => item.codProcedencia === institucionProcedenciaActualizado.codProcedencia);
    if (index !== -1) {
      this.listaInstitucionProcedencia[index] = institucionProcedenciaActualizado;
    }
  }
  obtenerInstitucionProcedencia(idInstitucionProcedencia: string){
    
  }
  obtenerInstitucionesDeProcedencia(): Observable<InstitucionProcedenciaModel[]>{
    return of(this.listaInstitucionProcedencia);
  }
  filtroInstitucionProcedenciaCodigo(codigoIngresado: string): Observable<InstitucionProcedenciaModel[]> {
    const listaFiltrada = this.listaInstitucionProcedencia.filter(inst => inst.codProcedencia.includes(codigoIngresado));
    if (listaFiltrada.length > 0) {
      return of(listaFiltrada);
    } else {
      return of([]);
    }
  }
  filtroInstitucionProcedenciaNombre(nombreIngresado: string): Observable<InstitucionProcedenciaModel[]>{
    const nombreIngresadoMinusculas = nombreIngresado.toLowerCase();
    const listaFiltrada = this.listaInstitucionProcedencia.filter(inst => inst.nombre.toLowerCase().includes(nombreIngresadoMinusculas));
    if(listaFiltrada.length>0){
      return of(listaFiltrada);
    }else{
      return of([]);
    }

  }
}
