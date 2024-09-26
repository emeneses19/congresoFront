import { Injectable } from '@angular/core';
import { EventoModel } from '../models/evento.model';
import { DateTime } from 'luxon';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  listaEvento: EventoModel[] = [
    {
      congresoIdCongreso: '019995222222',
      codEvento: '20240658',
      fecha: DateTime.now(),
      tolerancia: DateTime.now(),
      nombre: 'evento 001',
      descripcion: 'esto es la descripcion de evento 001',
      duracion: '12'
    }
  ];

  constructor() { }
  agregarEvento(evento: EventoModel) {
    this.listaEvento.push(evento);

  }
  eliminarEvento(evento: EventoModel){
    const index = this.listaEvento.findIndex(item => item === evento);
    if (index !== -1) {
      this.listaEvento.splice(index,1);
    }

  }
  actualizarEvento(eventoActualizado: EventoModel){
    const index = this.listaEvento.findIndex(item => item === eventoActualizado )
    if (index!==-1) {
      this.listaEvento[index] = eventoActualizado;
    }
  }
  obtenerEvento(): Observable<EventoModel[]>{
    return of(this.listaEvento);
  }
  filtroEventoPorCodigo(codigoIngresado: string): Observable<EventoModel[]>{
    const listaEventoFiltrada = this.listaEvento.filter(evento => evento.codEvento.includes(codigoIngresado));
    if (listaEventoFiltrada.length > 0) {
      return of(listaEventoFiltrada);      
    }
    else{
      return of([]);
    }

  }
  filtroEventoPorNombre(nombreIngresado:string): Observable<EventoModel[]>{
    const listaEventoFiltrada = this.listaEvento.filter(evento => evento.nombre.includes(nombreIngresado));
    if(listaEventoFiltrada.length > 0){
      return of(listaEventoFiltrada);
    }else{
      return of([]);
    }

  }
}
