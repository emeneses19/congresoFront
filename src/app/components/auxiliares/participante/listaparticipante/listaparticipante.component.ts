import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ParticpanteModel } from '../../../../models/participante.model';

const listaPersona: ParticpanteModel[] = [
  {codParticipante: '123456666', codDocumento: '01', numeroDocumento: '102124454', nombres: 'Fani', apellidos:'-', correo:'-',telefono:'12365', codInstitucionProcedencia:'20240703125', codCategoria:'0001', codLugarProcencia:'20240703125' },
  {codParticipante: '1234566656', codDocumento: '01', numeroDocumento: '1021244594', nombres: 'Elton', apellidos:'Jeje', correo:'-',telefono:'12365', codInstitucionProcedencia:'20240703125', codCategoria:'0001', codLugarProcencia:'20240703125' },
];

@Component({
  selector: 'app-listaparticipante',
  templateUrl: './listaparticipante.component.html',
  styleUrl: './listaparticipante.component.css'
})
export class ListaparticipanteComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['codParticipante','codDocumento','numeroDocumento','nombres','apellidos','codInstitucionProcedencia', 'codCategoria', 'codLugarProcencia' ];
  dataSource = new MatTableDataSource<ParticpanteModel>(listaPersona);
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;

  constructor(){
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
  
  }


}
