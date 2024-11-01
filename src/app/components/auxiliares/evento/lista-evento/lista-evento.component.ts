import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EventoModel } from '../../../../models/evento.model';
import { EventoService } from '../../../../services/evento.service';

@Component({
  selector: 'app-lista-evento',
  templateUrl: './lista-evento.component.html',
  styleUrl: './lista-evento.component.css'
})



export class ListaEventoComponent {
  //listaEvento: EventoModel[] =[];
  displayedColumns: string[] = [ 'acciones','codigo', 'nombre', 'descripcion', 'fechaHoraevento', 'tolerancia', 'duracion', 'congreso'];
  dataSource = new MatTableDataSource<EventoModel>();

  constructor(private _eventoservice: EventoService){

  }

  ngOnInit(): void {
    this.obtenerEventos();
  }

  obtenerEventos(){
    this._eventoservice.obtenerEvento().subscribe(eventos =>{
      this.dataSource.data = eventos;
      console.log('es data source actualizado');
      console.log(this.dataSource.data);
    })
  }
}
