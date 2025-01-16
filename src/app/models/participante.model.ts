

export class ParticpanteModel {
    codParticipante: string;
    codDocuento: string;
    numeroDocumento: string;
    nombres: string;
    apellidos: string;
    correo: string;
    telefono: string;
    codInstitucionProcedencia: string;
    codCategoria: string;
    codLugarProcencia: string;
    constructor(){
        this.codParticipante ='';
        this.codDocuento = '';
        this.numeroDocumento = '';
        this.nombres='';
        this.apellidos = '';
        this.correo='';
        this.telefono='';
        this.codInstitucionProcedencia =  ''
        this.codCategoria = '';
        this.codLugarProcencia = '';
    }

}