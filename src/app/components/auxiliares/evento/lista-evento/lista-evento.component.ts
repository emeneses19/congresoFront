import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EventoModel } from '../../../../models/evento.model';

@Component({
  selector: 'app-lista-evento',
  templateUrl: './lista-evento.component.html',
  styleUrl: './lista-evento.component.css'
})



export class ListaEventoComponent {
  listaEvento: EventoModel[] =[];
  displayedColumns: string[] = [ 'acciones','codigo', 'nombre', 'descripcion', 'fechaHoraevento', 'tolerancia', 'duracion', 'congreso'];
  dataSource = new MatTableDataSource<EventoModel>(this.listaEvento);
}
