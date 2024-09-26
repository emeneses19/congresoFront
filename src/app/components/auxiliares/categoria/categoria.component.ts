import { Component, ViewChild } from '@angular/core';
import { CategoriaModel } from '../../../models/categoria.model';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CategoriaService } from '../../../services/categoria.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent {

  listaCategoria: CategoriaModel[] = [];
  cargando: boolean = false;


  displayedColumns: string[] = ['acciones', 'codigo', 'descripcion'];
  dataSource!: MatTableDataSource<any>;

  formInscripcion: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private formBuil: FormBuilder,
    private _categoriaService: CategoriaService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    this.formInscripcion = this.formBuil.group({
      codigo: ['', Validators.required],
      descripcion: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.obtenerCategoria();
  }

  obtenerCategoria() {
    this.listaCategoria = this._categoriaService.obtenerCategoria();
    this.dataSource = new MatTableDataSource(this.listaCategoria)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }


  agregarCategoria() {
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
        const inscripcion: CategoriaModel = {
          codCategoria: this.formInscripcion.value.codigo,
          descripcion: this.formInscripcion.value.descripcion,
        }
        this._categoriaService.agregarCategoria(inscripcion);
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

  eliminarCategoria(index: number) {
    console.log(index);
    this._categoriaService.eliminarCategoria(index);
    this.obtenerCategoria();

    this._snackBar.open('se elimino el registro con éxito', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }
}

