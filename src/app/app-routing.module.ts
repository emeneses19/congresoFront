import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventoComponent } from './components/auxiliares/evento/evento.component';
import { AuxiliaresComponent } from './components/auxiliares/auxiliares.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {path:'', redirectTo:'inicio', pathMatch:'full'},
  {path:'inicio', component: InicioComponent},
  {path:'auxiliares', component: AuxiliaresComponent},
  {path:'**', redirectTo:'inicio', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
