import { Component, ViewChild } from '@angular/core';
import { CategoriaModel } from '../../../models/categoria.model';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
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

  error: boolean = false;
  textoError: string = '';
  listaCategoria: CategoriaModel[] = [
    {codCategoria:'12345678',
      descripcion : 'Categoria 1'
    }
  ];
  cargando: boolean = false;
  categoria: CategoriaModel = new CategoriaModel();
  categoriaActualizar: CategoriaModel = new CategoriaModel();


  constructor(){
}

  ngOnInit(): void {
  }

  generarCodCategoria(){
    const tiempoObtenida = new Date().getTime().toString();
    this.categoria.codCategoria = tiempoObtenida;
  }

  filtroCategoriaPorCodigo(){
    //falta el filtro
  }
  filtroCategoriaPorDescripcion(){
 //falta el filtro
  }

  agregarCategoria(from: NgForm) {
    //console.log(this.formInscripcion);

  
  }

 
}

