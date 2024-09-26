import { Injectable } from '@angular/core';
import { CategoriaModel } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  listaCategoria: CategoriaModel[] = [
    { codCategoria: '111', descripcion: '1ALUMNO' },
    { codCategoria: '', descripcion: '2docente' },
    { codCategoria: '', descripcion: '3docente' },
    { codCategoria: '', descripcion: '6docente' },
    { codCategoria: '', descripcion: '4docente' },
    { codCategoria: '', descripcion: '3docente' },
    { codCategoria: '', descripcion: '2docente' },
  ];

  constructor() { }

  obtenerCategoria(){
    return this.listaCategoria.slice();
  }

  eliminarCategoria(id: number){
    this.listaCategoria.splice(id,1);
  }

  agregarCategoria(categoria: CategoriaModel){
    this.listaCategoria.push(categoria);
  }
}
