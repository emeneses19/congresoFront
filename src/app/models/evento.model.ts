import { DateTime } from "luxon";
import { CongresoModel } from "../models/congreso.model" 

export class EventoModel{
    congresoIdCongreso:string;
    codEvento: string;    
    fecha: Date;
    tolerancia: Date;
    nombre:string;
    descripcion: string;
    duracion: string;
    
    constructor(congreso: CongresoModel){
        this.congresoIdCongreso = congreso.codigoCongreso;
        this.codEvento= '';
        this.fecha =  new Date();
        this.tolerancia = new Date();
        this.nombre = '';
        this.descripcion ='';
        this.duracion = '';
       
    } 
}