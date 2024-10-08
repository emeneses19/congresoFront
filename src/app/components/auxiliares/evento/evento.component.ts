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
  textoError: string ='';
  error: boolean = false;
  cargando: boolean = false;
  evento: EventoModel = new EventoModel(new CongresoModel());
  listaDeEvento: EventoModel[]= [
  ];
  eventoActualizar: EventoModel = new EventoModel(new CongresoModel());
  listaDeCongresos: CongresoModel[] = [];
  
  constructor(private _congresoServices: CongresoService,
              private _eventoServices: EventoService
  ) {
    this.obtenerCongresos();
    this.obtenerEventos();
  }
  obtenerEventos(){
    this._eventoServices.obtenerEvento().subscribe((eventos)=>{
      this.listaDeEvento = eventos;
      console.log(this.listaDeEvento);
    })
  }

  generarIdEvento(){
    const timestamp = new Date().getTime().toString();
    this.evento = new EventoModel(new CongresoModel());
    this.evento.codEvento = timestamp;
  }
  guardarEvento(form: NgForm){
    if(form.invalid){
      this.error = true;
      this.textoError = 'Formulario incorrecto. Por favor, revíselo.';
      return;
    }else{
      this.error = false;
      this._eventoServices.agregarEvento(this.evento);
      console.log(this.listaDeEvento);
    }
  }

  obtenerCongresos(){
  this._congresoServices.obtenerCongreso().subscribe(
    (data:CongresoModel[]) =>{
      this.listaDeCongresos = data;
    },
    (error)=>{
      console.log(error);
    }
  )
  }



}
