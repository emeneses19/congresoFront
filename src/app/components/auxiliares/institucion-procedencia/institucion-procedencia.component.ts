import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { InstitucionProcedenciaModel } from '../../../models/institucion-procedencia.model';
import { InstitucionProcedenciaService } from '../../../services/institucion-procedencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-institucion-procedencia',
  templateUrl: './institucion-procedencia.component.html',
  styleUrl: './institucion-procedencia.component.css'
})
export class InstitucionProcedenciaComponent implements OnChanges {
  institucionProcedencia: InstitucionProcedenciaModel = new InstitucionProcedenciaModel();
  textoError: string = 'texto error';
  error: boolean = false;
  listaDeInstitucionesDeProcedencia: InstitucionProcedenciaModel[] = [];
  instituionProcedenciaActualizar: InstitucionProcedenciaModel = new InstitucionProcedenciaModel();
  cargando: boolean = false;

  constructor(private _institucionProcedenciaService: InstitucionProcedenciaService) {
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
  ngOnInit(): void {
    this.generarIdParaInstProcedencia();
    this.obtenerInstitucionesDeProcedencia();
  }

  filtroInstitucionesDeProcedenciaPorCodigo() {
    this.cargando = true;
    this._institucionProcedenciaService.filtroInstitucionProcedenciaCodigo(this.institucionProcedencia.codProcedencia).subscribe(result => {
      this.listaDeInstitucionesDeProcedencia = result;
      this.cargando = false;
    });

  }
  filtroInstitucionesDeProcedenciaPorNombre() {
    this.cargando = true;
    this._institucionProcedenciaService.filtroInstitucionProcedenciaNombre(this.institucionProcedencia.nombre).subscribe(inst => {
      this.listaDeInstitucionesDeProcedencia = inst;
      this.cargando = false;
    })
  }

  recibiendoInstProcedencia(instProcedencia: InstitucionProcedenciaModel) {
    this.instituionProcedenciaActualizar = JSON.parse(JSON.stringify(instProcedencia));
    this.institucionProcedencia = this.instituionProcedenciaActualizar;
  }

  guardar(form: NgForm) {
    console.log(form);
    if (form.invalid) {
      this.error = true;
      this.textoError = 'Formulario incorrecto. Por favor, revíselo.';
      return;
    } else {
      const codigoExistente = this.listaDeInstitucionesDeProcedencia
        .find(inst => inst.codProcedencia === this.institucionProcedencia.codProcedencia);

      this.cargando = true; // Activar indicador de carga después de un retraso
      setTimeout(() => {
        if (this.instituionProcedenciaActualizar.codProcedencia) {
          this._institucionProcedenciaService.actualizarInstitucionProcedencia(this.institucionProcedencia);
          this.cargando = false;
          this.resetearFormulario();
          this.instituionProcedenciaActualizar = new InstitucionProcedenciaModel();
        } else {
          if (codigoExistente) {
            this._institucionProcedenciaService.actualizarInstitucionProcedencia(this.institucionProcedencia);
            this.cargando = false;
            this.resetearFormulario();

          } else {
            this.error = false;
            this._institucionProcedenciaService.agregarInstitucionProcedencia(this.institucionProcedencia);
            this.cargando = false;
            this.mensajeDeExito();
            this.resetearFormulario();
          }
        }
      }, 1000); // Coloca el tiempo de retraso deseado aquí (en milisegundos)


    }
  }

  resetearFormulario() {
    this.institucionProcedencia = new InstitucionProcedenciaModel();
    this.generarIdParaInstProcedencia();
  }

  mensajeDeExito() {
    Swal.fire({
      text: `El registro se ha guardado exitosamente.`,
      icon: 'success',
      width: 400,
      confirmButtonColor: "#1772b8",
    });
  }

  generarIdParaInstProcedencia() {
    const timestamp = new Date().getTime().toString();
    this.institucionProcedencia = new InstitucionProcedenciaModel();
    this.institucionProcedencia.codProcedencia = timestamp;
  }
  obtenerInstitucionesDeProcedencia() {
    this.cargando = true;
    this._institucionProcedenciaService.obtenerInstitucionesDeProcedencia().subscribe(data => {
      this.listaDeInstitucionesDeProcedencia = data
    });
    this.cargando = false;
  }

  eliminarInstitucionDeProcedencia(institucionProcedencia: InstitucionProcedenciaModel) {
    Swal.fire({
      title: 'Aviso',
      text: `Esta seguro de eliminar el registro? `,
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: "#1772b8",
      width: 400,
    }).then(resp => {
      if (resp.value) {
        this._institucionProcedenciaService.eliminarInstitucionProcedencia(institucionProcedencia);
        this.obtenerInstitucionesDeProcedencia();
      }
    })
  }

}
