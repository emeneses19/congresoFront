import { Component } from '@angular/core';
import { CategoriaModel } from '../../../../models/categoria.model';

@Component({
  selector: 'app-listacategoria',
  templateUrl: './listacategoria.component.html',
  styleUrl: './listacategoria.component.css'
})
export class ListacategoriaComponent {
  listaDeCategoria:CategoriaModel[] =[]; 

  eliminarCategoria(categoria: CategoriaModel){
//falta impem
  }
  categoriaActualizar(categoria: CategoriaModel){
    //falta impem
      }

}
