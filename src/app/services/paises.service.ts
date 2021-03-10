
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { URL_PAISES } from 'src/environments/environment';
import { Pais } from '../interfaces/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  httpParams = new HttpParams().set('fields', 'name;capital;population;flag');

  constructor(private http: HttpClient) {}

  getPaises(): Observable<Pais[]> {

    // const url = URL_PAISES + '?fields=name;capital;population;flag';
    const url = URL_PAISES;
    return this.http.get<Pais[]>(url, { params: this.httpParams } );

  }



  // mal hecho
  getPaisesMalHecho() {

    // const url = URL_PAISES + '?fields=name;capital;population;flag';
    const url = URL_PAISES;
    return this.http.get(url, { params: this.httpParams } );
    

  }

  
}
