import { Component } from '@angular/core';
import { EstadoInscripcionModel } from '../../../models/estado-inscripcion.model';
import { NgForm } from '@angular/forms';
import { EstadoInscripcionService } from '../../../services/estado-inscripcion.service';
import Swal from 'sweetalert2';

@Component({
selector: 'app-estadodeinscripcion',
templateUrl: './estadodeinscripcion.component.html',
styleUrl: './estadodeinscripcion.component.css'
})
export class EstadodeinscripcionComponent {
error:boolean = false;
textoError: string = '';  
cargando: boolean = false;
listaEstadoDeInscripcion: EstadoInscripcionModel[] = [];
estadoDeInscripcion: EstadoInscripcionModel= new EstadoInscripcionModel();
estadoInscripcionActualizar: EstadoInscripcionModel = new EstadoInscripcionModel();


constructor(private _estadoDeInscripcionService: EstadoInscripcionService){
}
recibiendoEstadoInscripcion(estadoInscripcion: EstadoInscripcionModel){
  this.estadoInscripcionActualizar = JSON.parse(JSON.stringify(estadoInscripcion));;
  this.estadoDeInscripcion = this.estadoInscripcionActualizar;


}
eliminarestadoInscripcion(estadoInscripcion: EstadoInscripcionModel){
  this._estadoDeInscripcionService.eliminarEstaInscripcion(estadoInscripcion);
  console.log ('esto es aqui despues de eliminar');
  this.obtenerEstadoInscripcion();
}



ngOnInit(): void {
  this.obtenerEstadoInscripcion();
}

generarCodCategoria(){
  const codigo = new Date().getTime().toString();
  this.estadoDeInscripcion.codInscripcion = codigo;
}

agregarEstadoInscripcion(form: NgForm){
  if(form.invalid){
    this.textoError = 'Formulario incorrecto. Por favor, revíselo.'
    this.error = true;

  }else{
    const codigoExistenteEstadoinscripcion = this.listaEstadoDeInscripcion.find(estadoIns => estadoIns.codInscripcion === this.estadoDeInscripcion.codInscripcion);
    this.cargando = true;
    setTimeout(()=>{
      if (this.estadoInscripcionActualizar.codInscripcion) {
        this._estadoDeInscripcionService.actualizarEstaInscripcion(this.estadoDeInscripcion);
        this.mensajeDeExito();
        this.cargando = false;
        this.obtenerEstadoInscripcion();
        this.estadoInscripcionActualizar = new EstadoInscripcionModel();
        this.formatearFormulario();
      } else {
        if (codigoExistenteEstadoinscripcion) {
          this._estadoDeInscripcionService.actualizarEstaInscripcion(this.estadoDeInscripcion);
          this.cargando = false;
          this.mensajeDeExito();
          this.formatearFormulario();
          this.obtenerEstadoInscripcion();
          this.estadoInscripcionActualizar = new EstadoInscripcionModel();
        } else {
          this.cargando = false;
          this._estadoDeInscripcionService.agregarInscripcion(this.estadoDeInscripcion);
          this.obtenerEstadoInscripcion();
          this.error = false;
          this.textoError = '';
          this.mensajeDeExito();
          this.formatearFormulario();
        }
      }
    }, 100);
  }
  

}
obtenerEstadoInscripcion(){
  this.cargando = true;
  this._estadoDeInscripcionService.obtenerEstadoInscripcion().subscribe(estadoInscripcion =>{
    this.listaEstadoDeInscripcion = estadoInscripcion;
    this.cargando= false;
  } )
}
mensajeDeExito(){
  Swal.fire({
    text: `El registro se ha guardado exitosamente.`,
    icon: 'success',
    width: 400,
    confirmButtonColor: "#1772b8",
  });
}

formatearFormulario() {
  this.estadoDeInscripcion = new EstadoInscripcionModel();
}
}


