import { Injectable } from '@angular/core';
import { CategoriaModel } from '../models/categoria.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  listaCategoria: CategoriaModel[] = [
    { codCategoria: '0001', descripcion: 'Categoria 21' }
  ];

  constructor() { }

  
  obtenerCategoria(): Observable<CategoriaModel[]>{
    return of(this.listaCategoria); 
  }

  actualizarCategoria(categoriaActualizado: CategoriaModel){
    const index= this.listaCategoria.findIndex(item => item.codCategoria === categoriaActualizado.codCategoria);
    if(index !== -1){
      this.listaCategoria[index] = categoriaActualizado;
    }

  }

  eliminarCategoria(categoria: CategoriaModel){
    const index = this.listaCategoria.findIndex(item => item === categoria)
    if(index !== -1){
      this.listaCategoria.splice(index,1);
    }
  }

  agregarCategoria(categoria: CategoriaModel){
    const index = this.listaCategoria.findIndex(item => item.codCategoria === categoria.codCategoria);
    if(index !== -1){
      this.listaCategoria[index] = categoria;
    }
    this.listaCategoria.push(categoria);
  }

}
