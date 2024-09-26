
export class CongresoModel {
    codigoCongreso: string;
    nombre: string;
    abierto: Boolean;
    fechaApertura: Date;
    fechaCierre: Date;
    constructor() {
        this.codigoCongreso = '';
        this.nombre = '';
        this.abierto = true;
        this.fechaApertura = new Date();
        this.fechaCierre = new Date();
    }
}
