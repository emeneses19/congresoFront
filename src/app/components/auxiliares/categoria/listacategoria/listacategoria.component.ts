import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { CategoriaModel } from '../../../../models/categoria.model';

@Component({
  selector: 'app-listacategoria',
  templateUrl: './listacategoria.component.html',
  styleUrl: './listacategoria.component.css'
})
export class ListacategoriaComponent {
  @Input() listaDeCategoria: CategoriaModel[] = [];
  @Input() sinResultadosFiltro: Boolean = false;
  @Output() categoriaEliminar = new EventEmitter()
  @Output() categoriaEditar = new EventEmitter();

  eliminarCategoria(categoria: CategoriaModel) {
    this.categoriaEliminar.emit(categoria);
  }


}
