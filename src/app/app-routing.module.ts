import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { McalificacionComponent } from './components/mcalificacion/mcalificacion.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { PopularesComponent } from './components/populares/populares.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },

  { path: 'calificacion', component: McalificacionComponent},

  { path: 'populares', component: PopularesComponent},

  { path: 'buscar', component: BusquedaComponent},

  { path: 'pelicula/:id', component: PeliculaComponent },
  
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
