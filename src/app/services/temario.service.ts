
import { Injectable } from '@angular/core';
import { TEMARIO } from '../data/datostemario.json';
import { Tema } from '../interfaces/tema.interface';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class TemarioService {

  meGustanEnElServicio = 0;
 

  constructor() {

    console.log('Iniciando el servicio Temario');
  }

  sumaMeGusta(): void {
    this.meGustanEnElServicio ++;
  }

  getTemario() {
    return TEMARIO;
  }

  getAutorTema(idTema: number ) {

    return `El tema ${idTema}, fué escrito por Cervantes.`;
  }

  guardarTema(temaParaGuardar: Tema ) {

    Swal.fire('Guardado', `El tema ${temaParaGuardar.titulo} ha sido guardado`, 'success');
    
  }

  // getPaises() {
    
  //   const url = 'https://restcountries.eu/rest/v2/all';

  //   return this.http.get( url );
  // // observable

  // }


}
