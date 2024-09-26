import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LugarProcedenciaModel } from '../../../models/lugar-procedencia.models';
import { LugarProcedenciaService } from '../../../services/lugar-procedencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lugar-procedencia',
  templateUrl: './lugar-procedencia.component.html',
  styleUrl: './lugar-procedencia.component.css'
})
export class LugarProcedenciaComponent {
  error: boolean = false
  textoError: string = '';
  cargando: boolean = false;
  lugarProcedencia: LugarProcedenciaModel = new LugarProcedenciaModel();
  listaDeLugaresDeProcedencia: LugarProcedenciaModel[] = [];
  lugarProcedenciaActualizar: LugarProcedenciaModel = new LugarProcedenciaModel();


  constructor(private _lugarProcedenciaService: LugarProcedenciaService) {

  }

  ngOnInit(): void {
    this.generarIdParalugarProcedencia();
    this.obtenerLugaresDeProcedencia();
  }
  filtroLugarDeProcedenciaPorCodigo() {
    this.cargando = true;
    this._lugarProcedenciaService.filtroLugarProcedenciaCodigo(this.lugarProcedencia.codigoLugarProcedencia).subscribe(result => {
      this.listaDeLugaresDeProcedencia = result;
      this.cargando = false;
    });

  }
  filtroLugarDeProcedenciaPorNombre() {
    this.cargando = true;
    this._lugarProcedenciaService.filtroLugarProcedenciaNombre(this.lugarProcedencia.nombre).subscribe(lugar => {
      this.listaDeLugaresDeProcedencia = lugar;
      this.cargando = false;
    })
  }

  recibiendoLugarDeProcedencia(lugarProcedencia: LugarProcedenciaModel) {
    this.lugarProcedenciaActualizar = JSON.parse(JSON.stringify(lugarProcedencia));
    this.lugarProcedencia = this.lugarProcedenciaActualizar;
  }

  guardar(form: NgForm) {
    if (form.invalid) {
      this.error = true;
      this.textoError = 'Formulario incorrecto. Por favor, revíselo.';
      return;
    } else {
      const codigoExistente = this.listaDeLugaresDeProcedencia
        .find(lugar => lugar.codigoLugarProcedencia === this.lugarProcedencia.codigoLugarProcedencia);

      this.cargando = true; // Activar indicador de carga después de un retraso
      setTimeout(() => {
        if (this.lugarProcedenciaActualizar.codigoLugarProcedencia) {
          this._lugarProcedenciaService.actualizarLugarProcedencia(this.lugarProcedencia);
          this.cargando = false;
          this.resetearFormulario();
          this.lugarProcedenciaActualizar = new LugarProcedenciaModel();
        } else {
          if (codigoExistente) {
            this._lugarProcedenciaService.actualizarLugarProcedencia(this.lugarProcedencia);
            this.cargando = false;
            this.resetearFormulario();

          } else {
            this.error = false;
            this._lugarProcedenciaService.agregarLugarProcedencia(this.lugarProcedencia);
            this.cargando = false;
            this.mensajeDeExito();
            this.resetearFormulario();
          }
        }
      }, 1000); // Coloca el tiempo de retraso deseado aquí (en milisegundos)


    }
  }

  resetearFormulario() {
    this.lugarProcedencia = new LugarProcedenciaModel();
    this.generarIdParalugarProcedencia();
  }

  mensajeDeExito() {
    Swal.fire({
      text: `El registro se ha guardado exitosamente.`,
      icon: 'success',
      width: 400,
      confirmButtonColor: "#1772b8",
    });
  }

  generarIdParalugarProcedencia() {
    const timestamp = new Date().getTime().toString();
    this.lugarProcedencia = new LugarProcedenciaModel();
    this.lugarProcedencia.codigoLugarProcedencia = timestamp;
  }
  obtenerLugaresDeProcedencia() {
    this.cargando = true;
    this._lugarProcedenciaService.obtenerLugaresDeProcedencia().subscribe(data => {
      this.listaDeLugaresDeProcedencia = data
    });
    this.cargando = false;
  }

  eliminarLugarDeProcedencia(lugarProcedencia: LugarProcedenciaModel) {
    Swal.fire({
      title: 'Aviso',
      text: `Esta seguro de eliminar el registro? `,
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: "#1772b8",
      width: 400,
    }).then(resp => {
      if (resp.value) {
        this._lugarProcedenciaService.eliminarLugarProcedencia(lugarProcedencia);
        this.obtenerLugaresDeProcedencia();
      }
    })
  }



}
