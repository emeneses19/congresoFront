import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { EstadoInscripcionModel } from '../../../models/estado-inscripcion.model';
import { EstadoInscripcionService } from '../../../services/estado-inscripcion.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-estado-inscripcion',
  templateUrl: './estado-inscripcion.component.html',
  styleUrl: './estado-inscripcion.component.css'
})
export class EstadoInscripcionComponent implements OnInit {

  listaEstadoInscripcion: EstadoInscripcionModel[] = [];
  cargando: boolean = false;


  displayedColumns: string[] = ['acciones', 'codigo', 'descripcion'];
  dataSource!: MatTableDataSource<any>;

  formInscripcion: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private formBuil: FormBuilder,
    private _inscripcionService: EstadoInscripcionService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.formInscripcion = this.formBuil.group({
      codigo: ['', Validators.required],
      descripcion: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.obtenerEstadoInscripcion();
  }

  obtenerEstadoInscripcion() {
    this.listaEstadoInscripcion = this._inscripcionService.obtenerInscripcion();
    this.dataSource = new MatTableDataSource(this.listaEstadoInscripcion)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  agregarEstadoInscripcion() {
    //console.log(this.formInscripcion);

    if (this.formInscripcion.invalid) {
      this._snackBar.open('Rellene los campos requeridos', '', {
        duration: 4000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      })
    } else {

      this.cargando = true;
      setTimeout(() => {
        const inscripcion: EstadoInscripcionModel = {
          codInscripcion: this.formInscripcion.value.codigo,
          descripcion: this.formInscripcion.value.descripcion,
        }
        this._inscripcionService.agregarInscripcion(inscripcion);
        this._snackBar.open('se agrego correctamente el usuario', '', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        })
        this.cargando = false;
      }, 2000);
      
     
      //console.log(inscripcion);
    }

  }

  eliminarInscripcion(index: number) {
    console.log(index);
    this._inscripcionService.eliminarInscripcion(index);
    this.obtenerEstadoInscripcion();

    this._snackBar.open('se elimino el registro con éxito', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }

}

