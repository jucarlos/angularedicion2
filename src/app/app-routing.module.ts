import { TemplateComponent } from './pages/formularios/template/template.component';
import { GraficaComponent } from './pages/grafica/grafica.component';
import { ClienteComponent } from './pages/clientes/cliente/cliente.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";


import { ClientesComponent } from './pages/clientes/clientes.component';
import { DirectivasComponent } from './pages/directivas/directivas.component';
import { HomeComponent } from './pages/home/home.component';
import { PaisesComponent } from './pages/paises/paises.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { TemarioComponent } from './pages/temario/temario.component';
import { TipoVehiculosComponent } from './pages/tipo-vehiculos/tipo-vehiculos.component';

import { AuthGuard } from './guards/auth.guard';
import { ReactivosComponent } from './pages/formularios/reactivos/reactivos.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'temario', component: TemarioComponent },
    { path: 'directivas', component: DirectivasComponent },
    { path: 'pipes', component: PipesComponent },
    { path: 'paises', component: PaisesComponent },
    { path: 'clientes', component: ClientesComponent  },
    { path: 'cliente/:id', component: ClienteComponent  },
    { path: 'grafica', component: GraficaComponent  },
    { path: 'tipovehiculo', component: TipoVehiculosComponent , canActivate: [ AuthGuard ] },
    { path: 'template', component: TemplateComponent },
    { path: 'reactivos', component: ReactivosComponent },
    { path: '**', redirectTo: 'home'}
]

@NgModule({
    imports: [ RouterModule.forRoot( routes ) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}