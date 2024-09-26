import { Component } from '@angular/core';
import {  CongresoModel } from '../../../models/congreso.model';
import { CongresoService } from '../../../services/congreso.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-congreso',
  templateUrl: './congreso.component.html',
  styleUrl: './congreso.component.css'
})
export class CongresoComponent {
  error: boolean = false
  textoError: string = '';
  cargando: boolean = false;
  congreso: CongresoModel = new CongresoModel();
  listaDeCongresos: CongresoModel[] = [];
  congresoActualizar: CongresoModel = new CongresoModel();


  constructor(private _congresoService: CongresoService) {
    console.log(this.congreso.abierto);

  }

  ngOnInit(): void {
    this.generarIdParaCongreso();
    this.obtenerCongreso();
  }

  filtroCongresoPorCodigo() {
    this.cargando = true;
    this._congresoService.filtroCongresoCodigo(this.congreso.codigoCongreso).subscribe(result => {
      this.listaDeCongresos = result;
      this.cargando = false;
    });

  }
  filtroCongresoPorNombre() {
    this.cargando = true;
    this._congresoService.filtroCongresoNombre(this.congreso.nombre).subscribe(lugar => {
      this.listaDeCongresos = lugar;
      this.cargando = false;
    })
  }

  recibiendoCongreso(congreso: CongresoModel) {
    this.congresoActualizar = JSON.parse(JSON.stringify(congreso));
    this.congreso = this.congresoActualizar;
  }

  guardar(form: NgForm) {
    if (form.invalid) {
      this.error = true;
      this.textoError = 'Formulario incorrecto. Por favor, revíselo.';
      return;
    } else {
      const codigoExistente = this.listaDeCongresos
        .find(congreso => congreso.codigoCongreso === this.congreso.codigoCongreso);

      this.cargando = true; // Activar indicador de carga después de un retraso
      setTimeout(() => {
        if (this.congresoActualizar.codigoCongreso) {
          this._congresoService.actualizarCongreso(this.congreso);
          this.cargando = false;
          this.resetearFormulario();
          this.congresoActualizar = new CongresoModel();
          this.mensajeDeExito();
        } else {
          if (codigoExistente) {
            this._congresoService.actualizarCongreso(this.congreso);
            this.cargando = false;
            this.mensajeDeExito();
            this.resetearFormulario();            
            this.obtenerCongreso();

          } else {
            this.error = false;
            this._congresoService.agregarCongreso(this.congreso);
            this.cargando = false;
            this.mensajeDeExito();
            this.resetearFormulario();
          }
        }
      }, 1000); // Coloca el tiempo de retraso deseado aquí (en milisegundos)


    }
  }

  resetearFormulario() {
    this.congreso = new CongresoModel();
    this.generarIdParaCongreso();
  }

  mensajeDeExito() {
    Swal.fire({
      text: `El registro se ha guardado exitosamente.`,
      icon: 'success',
      width: 400,
      confirmButtonColor: "#1772b8",
    });
  }

  generarIdParaCongreso() {
    const timestamp = new Date().getTime().toString();
    this.congreso = new CongresoModel();
    this.congreso.codigoCongreso = timestamp;
  }
  obtenerCongreso() {
    this.cargando = true;
    this._congresoService.obtenerCongreso().subscribe(data => {
      this.listaDeCongresos = data
    });
    this.cargando = false;
  }

  eliminarCongreso(congreso: CongresoModel) {
    Swal.fire({
      title: 'Aviso',
      text: `Esta seguro de eliminar el registro? `,
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: "#1772b8",
      width: 400,
    }).then(resp => {
      if (resp.value) {
        this._congresoService.eliminarCongreso(congreso);
        this.obtenerCongreso();
      }
    })
  }
}
