import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventoModel } from '../../../models/evento.model';
import { CongresoModel } from '../../../models/congreso.model';
import { CongresoService } from '../../../services/congreso.service';
import { NgForm } from '@angular/forms';
import { EventoService } from '../../../services/evento.service';
@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrl: './evento.component.css'
})
export class EventoComponent {
  textoError: string = '';
  error: boolean = false;
  cargando: boolean = false;
  horaEvento: string = '';
  horaToleranciaEvento: string = '';
  evento: EventoModel = new EventoModel(new CongresoModel());
  listaDeEvento: EventoModel[] = [
  ];
  eventoActualizar: EventoModel = new EventoModel(new CongresoModel());
  listaDeCongresos: CongresoModel[] = [];

  constructor(private _congresoServices: CongresoService,
    private _eventoServices: EventoService
  ) {
    this.obtenerCongresos();
    this.obtenerEventos();
  }


  resetearFormulario(){
    this.evento = new EventoModel(new CongresoModel());
    this.horaEvento = '';
    this.horaToleranciaEvento ='';
  }

  obtenerEventos() {
    this._eventoServices.obtenerEvento().subscribe((eventos) => {
      this.listaDeEvento = eventos;
      console.log(this.listaDeEvento);
    })
  }

  generarIdEvento() {
    const timestamp = new Date().getTime().toString();
    this.evento = new EventoModel(new CongresoModel());
    this.evento.codigoEvento = timestamp;
  }
  convertirHoraAMPM(hora12: string): { horas: number, minutos: number } {
    let [tiempo, periodo] = hora12.split(' ');
    let [horas, minutos] = tiempo.split(':').map(Number);

    if (periodo === 'PM' && horas < 12) {
      horas += 12;
    } else if (periodo === 'AM' && horas === 12) {
      horas = 0;
    }

    return { horas: horas, minutos: minutos };
  }
  convertirHoraToleranciaAMPM(horaTolerancia12: string): { horasTolerancia: number, minutosTolerancia: number } {
    let [tiempoTolerancia, periodoTolerancia] = horaTolerancia12.split(' ');
    let [_horasTolerancia, _minutosTolerancia] = tiempoTolerancia.split(':').map(Number);

    if (periodoTolerancia === 'PM' && _horasTolerancia < 12) {
      _horasTolerancia += 12;
    } else if (periodoTolerancia === 'AM' && _horasTolerancia === 12) {
      _horasTolerancia = 0;
    }

    return { horasTolerancia: _horasTolerancia, minutosTolerancia: _minutosTolerancia };
  }

  combinarFechaYHora(fecha: Date, horas: number, minutos: number): Date {
    const fechaConHora = new Date(fecha);
    fechaConHora.setHours(horas, minutos);
    return fechaConHora;
  }

  guardarEvento(form: NgForm) {
    if (form.invalid) {
      this.error = true;
      this.textoError = 'Formulario incorrecto. Por favor, revíselo.';
      return;
    } else {
      this.error = false;
      const { horas, minutos } = this.convertirHoraAMPM(this.horaEvento);
      const fechaCompleta = this.combinarFechaYHora(this.evento.fecha, horas, minutos);
      this.evento.fecha = fechaCompleta;
      const { horasTolerancia, minutosTolerancia } = this.convertirHoraToleranciaAMPM(this.horaToleranciaEvento);
      const fechaCompletaTolerancia = this.combinarFechaYHora(this.evento.fecha, horasTolerancia, minutosTolerancia)
      this.evento.tolerancia = fechaCompletaTolerancia;
      this._eventoServices.agregarEvento(this.evento);
      console.log(this.listaDeEvento);
      this.resetearFormulario();
    }
  }

  obtenerCongresos() {
    this._congresoServices.obtenerCongreso().subscribe(
      (data: CongresoModel[]) => {
        this.listaDeCongresos = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }



}
