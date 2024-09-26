import { DateTime } from "luxon";
import { CongresoModel } from "../models/congreso.model" 

export class EventoModel{
    congresoIdCongreso:string;
    codEvento: string;    
    fecha: DateTime;
    tolerancia: DateTime;
    nombre:string;
    descripcion: string;
    duracion: string;
    
    constructor(congreso: CongresoModel){
        this.congresoIdCongreso = congreso.codigoCongreso;
        this.codEvento= '';
        this.fecha = DateTime.now();
        this.tolerancia = DateTime.now();
        this.nombre = '';
        this.descripcion ='';
        this.duracion = '';
       
    } 
}