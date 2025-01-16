import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuxiliaresComponent } from './components/auxiliares/auxiliares.component';
import { CategoriaComponent } from './components/auxiliares/categoria/categoria.component';
import { CongresoComponent } from './components/auxiliares/congreso/congreso.component';
//angular Material
import { MaterialModule } from './shared/modules/material.module';
import { InstitucionProcedenciaComponent } from './components/auxiliares/institucion-procedencia/institucion-procedencia.component';
import { ListaComponent } from './components/auxiliares/institucion-procedencia/lista/lista.component';
import { LugarProcedenciaComponent } from './components/auxiliares/lugar-procedencia/lugar-procedencia.component';
import { ListaLugarProcedenciaComponent } from './components/auxiliares/lugar-procedencia/lista-lugar-procedencia/lista-lugar-procedencia.component';
import { EventoComponent } from './components/auxiliares/evento/evento.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListaCongresoComponent } from './components/auxiliares/congreso/lista-congreso/lista-congreso.component';
import { ListaEventoComponent } from './components/auxiliares/evento/lista-evento/lista-evento.component';
import { ListacategoriaComponent } from './components/auxiliares/categoria/listacategoria/listacategoria.component';
import { EstadodeinscripcionComponent } from './components/auxiliares/estadodeinscripcion/estadodeinscripcion.component';
import { ListadeestadoinscripcionComponent } from './components/auxiliares/estadodeinscripcion/listadeestadoinscripcion/listadeestadoinscripcion.component';
import { AppcongresoComponent } from './shared/appcongreso/appcongreso.component';
import { ListaparticipanteComponent } from './components/auxiliares/participante/listaparticipante/listaparticipante.component';
import { CrearparticipanteavanzadoComponent } from './components/auxiliares/participante/crearparticipanteavanzado/crearparticipanteavanzado.component';
import { CrearparticipanterapidoComponent } from './components/auxiliares/participante/crearparticipanterapido/crearparticipanterapido.component';


@NgModule({
  declarations: [
    AppComponent,
    AuxiliaresComponent,
    CategoriaComponent,
    CongresoComponent,
    InstitucionProcedenciaComponent,
    ListaComponent,
    LugarProcedenciaComponent,
    ListaLugarProcedenciaComponent,
    EventoComponent,
    InicioComponent,
    ListaCongresoComponent,
    ListaEventoComponent,
    ListacategoriaComponent,
    EstadodeinscripcionComponent,
    ListadeestadoinscripcionComponent,
    AppcongresoComponent,
    ListaparticipanteComponent,
    CrearparticipanteavanzadoComponent,
    CrearparticipanterapidoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
