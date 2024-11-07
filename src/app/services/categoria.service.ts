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

  filtroCategoriaDescripcion(descripcionIngresado: string): Observable<CategoriaModel[]>{
    const descripcionIngresadoMinusculas = descripcionIngresado.toLocaleLowerCase();
    const listaFiltrada = this.listaCategoria.filter(categoria=>categoria.descripcion.toLowerCase().includes(descripcionIngresadoMinusculas));
    if(listaFiltrada.length > 0){
      return of(listaFiltrada);
    }else{
      return of([]);
    }

  }

filtroCategoriaCodigo(codigoIngresado: string): Observable<CategoriaModel[]>{
  const listaFiltrada = this.listaCategoria.filter(categoria => categoria.codCategoria.includes(codigoIngresado));
  if(listaFiltrada.length > 0){
    return of(listaFiltrada);
  }else{
    return of(listaFiltrada);
  }  

}
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
