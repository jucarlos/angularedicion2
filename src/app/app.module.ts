
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Formularios
import { FormsModule } from '@angular/forms';

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
import { GraficaComponent } from './pages/grafica/grafica.component';

// Graficas
import { ChartsModule } from 'ng2-charts';

// Socket
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { URL_SOCKET } from './../environments/environment';
import { ModalComponent } from './components/modal/modal.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const config: SocketIoConfig = { url: URL_SOCKET, options: {} };


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
    GraficaComponent,
    ModalComponent,
    UsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ChartsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
