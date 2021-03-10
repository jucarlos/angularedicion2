import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// http
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Mis componentes
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { TemarioComponent } from './pages/temario/temario.component';
import { DirectivasComponent } from './pages/directivas/directivas.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { ClientesComponent } from './pages/clientes/clientes.component';

// Pipes
import { PipesComponent } from './pages/pipes/pipes.component';

// Pipes
import { AlrevesPipe } from './pipes/alreves.pipe';


// Configuración del idioma
import localeES from '@angular/common/locales/es';
import { registerLocaleData }  from '@angular/common';
import { PaisesComponent } from './pages/paises/paises.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Módulo de los componentes de material
import { MaterialModule } from './material/material.module';
import { ClienteComponent } from './pages/clientes/cliente/cliente.component';

registerLocaleData( localeES );


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TemarioComponent,
    DirectivasComponent,
    TarjetaComponent,
    PipesComponent,
    PaisesComponent,
    AlrevesPipe,
    ClientesComponent,
    ClienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
