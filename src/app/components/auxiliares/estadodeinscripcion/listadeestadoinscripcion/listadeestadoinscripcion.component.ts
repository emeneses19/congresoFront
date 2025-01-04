import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { EstadoInscripcionModel } from '../../../../models/estado-inscripcion.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listadeestadoinscripcion',
  templateUrl: './listadeestadoinscripcion.component.html',
  styleUrl: './listadeestadoinscripcion.component.css'
})
export class ListadeestadoinscripcionComponent implements OnChanges {
  @Input() listaEstadoInscripcion: EstadoInscripcionModel[] = [];
  @Input() filtroPorCodigo: string = '';
  @Input() filtroPorDescripcion: string = '';
  @Output() estadoInscripcionEliminar = new EventEmitter();
  @Output() estadoInscripcionEditar = new EventEmitter();
  sinRegsitros: boolean = false;

  estadodeInscripcionFiltradas: EstadoInscripcionModel[] = [];
  ngOnInit(): void {
    console.log(
      'esto es en hijo'       
    );
    console.log(this.listaEstadoInscripcion);

   
  }

  eliminarEstadoInscripcion(estadoInscripcionEliminar: EstadoInscripcionModel) {
    Swal.fire({
      title: 'Aviso',
      text: `Esta seguro de eliminar el registro? `,
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: "#1772b8",
      width: 400,
    }).then(resp => {
      if (resp.value) {
        this.estadoInscripcionEliminar.emit(estadoInscripcionEliminar);
        this.aplicarfiltro();
      }
    });
  }
    
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['listaDeCategoria'] || changes['filtroPorCodigo'] || changes['filtroPorDescripcion']){
      this.aplicarfiltro();
    }

  }
  aplicarfiltro() {
    const codigo = this.filtroPorCodigo.trim().toLocaleLowerCase();
    const descripcion = this.filtroPorDescripcion.trim().toLocaleLowerCase();
    if (!codigo && !descripcion) {
      this.estadodeInscripcionFiltradas = [...this.listaEstadoInscripcion];
    } else {
      this.estadodeInscripcionFiltradas = this.listaEstadoInscripcion.filter(estadoInscripcion => {
        const coincideCodigo = codigo ? estadoInscripcion.codInscripcion.toLowerCase().includes(codigo) : true;
        const coincideDescripcion = descripcion ? estadoInscripcion.descripcion.toLowerCase().includes(descripcion) : true;
        return coincideCodigo && coincideDescripcion;
      }
      )
    }


  }


}
