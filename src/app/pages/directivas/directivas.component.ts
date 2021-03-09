import { TemarioService } from './../../services/temario.service';
import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  titulo = 'Centros educativos';

  colegio = 'Colegio Infantes';

  mostrarColegio = true;

  datos = [1,2,4,5,6];

  colegios = ['Nara', 'Infantes', 'Mayol', 'Sefarad'];

  constructor() { }

  ngOnInit(): void {
  }


  mostrarOcultar(): void {

    this.mostrarColegio = !this.mostrarColegio;

    Swal.fire('Hecho', 'Pues ya lo hemos mostrado', 'success');

  }

}
