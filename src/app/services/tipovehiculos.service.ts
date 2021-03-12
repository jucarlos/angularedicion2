import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UsuarioService } from './usuarios.service';
import { URL_SERVICIOS } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TipovehiculosService {

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    token: this.usuarioService.token || ''
  });


  constructor(private http: HttpClient,
              private usuarioService: UsuarioService) { }

  getTiposDeVehiculos() {
    const url = URL_SERVICIOS + '/tipovehiculo';
    return this.http.get( url, { headers: this.httpHeaders } )
    // alguien se va a subscribir , pero antes voy a mirar algo en lo que viene
    .pipe(
      // operador de rxjs
      map( (resp: any) => {

        // reginstro ....
       
        return resp.tipoVehiculos;
      })
    )
    
    ;
  }


}
