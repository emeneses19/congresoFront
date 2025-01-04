import { Component, EventEmitter, Input, input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CategoriaModel } from '../../../../models/categoria.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listacategoria',
  templateUrl: './listacategoria.component.html',
  styleUrl: './listacategoria.component.css'
})
export class ListacategoriaComponent implements OnChanges {
  @Input() listaDeCategoria: CategoriaModel[] = [];
  categoriasFiltradas: CategoriaModel[] = [];
  @Input() filtroPorCodigo: string = '';
  @Input() filtroPorDescripcion: string = '';
  @Output() categoriaEliminar = new EventEmitter()
  @Output() categoriaEditar = new EventEmitter();
  sinRegistros:boolean = false;

  eliminarCategoria(categoria: CategoriaModel) {
    Swal.fire({
      title: 'Aviso',
      text: `Esta seguro de eliminar el registro? `,
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: "#1772b8",
      width: 400,
    }).then(resp => {
      if (resp.value) {
        this.categoriaEliminar.emit(categoria);
        this.aplicarFiltros();
      }
    });
    
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['listaDeCategoria'] || changes['filtroPorCodigo'] || changes['filtroPorDescripcion']){
      this.aplicarFiltros();
    }
  }
  aplicarFiltros() {
    const codigo = this.filtroPorCodigo?.trim().toLowerCase();
    const descripcion = this.filtroPorDescripcion?.trim().toLowerCase();

    if (!codigo && !descripcion) {
      // Si ambos inputs están en blanco, mostrar toda la lista
      this.categoriasFiltradas = [...this.listaDeCategoria];
    } else {
      // Filtrar por código o descripción según los inputs
      this.categoriasFiltradas = this.listaDeCategoria.filter(categoria => {
        const coincideCodigo = codigo ? categoria.codCategoria.toLowerCase().includes(codigo) : true;
        const coincideDescripcion = descripcion ? categoria.descripcion.toLowerCase().includes(descripcion) : true;
        return coincideCodigo && coincideDescripcion;
      });
    }
  }
}
