import { Component, ViewChild } from '@angular/core';
import { CategoriaModel } from '../../../models/categoria.model';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CategoriaService } from '../../../services/categoria.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent {

  error: boolean = false;
  textoError: string = '';
  listaCategoria: CategoriaModel[] = [
  ];
  listaCategoriaFiltrada: CategoriaModel[] = [];
  cargando: boolean = false;
  categoria: CategoriaModel = new CategoriaModel();
  categoriaActualizar: CategoriaModel = new CategoriaModel();
  sinResultadosFiltro: boolean = false;

  constructor(private _categoriaServices: CategoriaService) {

  }

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  recibiendoCategoria(categoria: CategoriaModel) {
    this.categoriaActualizar = JSON.parse(JSON.stringify(categoria));
    this.categoria = this.categoriaActualizar;
  }

  generarCodCategoria() {
    const tiempoObtenida = new Date().getTime().toString();
    this.categoria.codCategoria = tiempoObtenida;
  }
  eliminarCategoria(categoria: CategoriaModel) {
    this._categoriaServices.eliminarCategoria(categoria);
  }


  // filtroCategoriaPorDescripcion() {
  //   const descripcionIngresado = this.categoria.descripcion.trim();
  //   if(descripcionIngresado){
  //     this.cargando = true;
  //     this._categoriaServices.filtroCategoriaDescripcion(this.categoria.descripcion).subscribe(result => {
  //       this.listaCategoriaFiltrada = result;
  //       this.sinResultadosFiltro = result.length ===0;
  //       this.cargando = false;
  //     })
  //   }else{
  //     this.listaCategoriaFiltrada = this.listaCategoria;
  //     this.sinResultadosFiltro = false;
  //   }
 
  // }
  formatearFormulario() {
    this.categoria = new CategoriaModel();
  }
  mensajeDeExito() {
    Swal.fire({
      text: `El registro se ha guardado exitosamente.`,
      icon: 'success',
      width: 400,
      confirmButtonColor: "#1772b8",
    });
  }
  

  agregarCategoria(form: NgForm) {
    if (form.invalid) {
      this.error = true;
      this.textoError = 'Formulario incorrecto. Por favor, revíselo.';
    } else {
      const codigoExistenteCategoria = this.listaCategoria.find(categoria => categoria.codCategoria === this.categoria.codCategoria);
      this.cargando = true;
      setTimeout(() => {
        if (this.categoriaActualizar.codCategoria) {
          this._categoriaServices.actualizarCategoria(this.categoria);
          this.mensajeDeExito();
          this.cargando = false;
          this.obtenerCategorias();
          this.categoriaActualizar = new CategoriaModel();
          this.formatearFormulario()
          console.log(this.listaCategoria);
        } else {
          if (codigoExistenteCategoria) {
            this._categoriaServices.actualizarCategoria(this.categoria);
            this.cargando = false;
            this.mensajeDeExito();
            this.formatearFormulario();
            this.obtenerCategorias();
            this.categoriaActualizar = new CategoriaModel();
            console.log(this.listaCategoria);
          } else {
            this.cargando = false;
            this._categoriaServices.agregarCategoria(this.categoria);
            this.obtenerCategorias();
            this.error = false;
            this.textoError = '';
            console.log(this.listaCategoria);
            this.mensajeDeExito();
            this.formatearFormulario();
          }
        }
      }, 100);

    }


  }
  obtenerCategorias() {
    this.cargando = true;
    this._categoriaServices.obtenerCategoria().subscribe(categorias => {
      this.listaCategoria = categorias;
      this.cargando = false;
    })
  }


}

