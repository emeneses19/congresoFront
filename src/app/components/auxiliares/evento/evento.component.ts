import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { AgregarEventoComponent } from './agregar-evento/agregar-evento.component';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrl: './evento.component.css'
})
export class EventoComponent {
  constructor(public dialog: MatDialog) {}
  // openAgregarEvento(){
  //   this.dialog.open(AgregarEventoComponent);
  // }

}
