import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { PaisesService } from './../../services/paises.service';
import { Pais } from './../../interfaces/pais.interface';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: Pais[] = [];
  cargando = false;
  textoCargando = 'Cargando. Espere...';

  displayedColumns: string[] = ['Nombre', 'Capital', 'Poblacion', 'Bandera'];

  dataSource = new MatTableDataSource(this.paises);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  

  constructor(private paisesService: PaisesService,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarPaises();    
  }

  cargarPaises() {

    this.cargando = true;

    this.paisesService.getPaises()
    .subscribe( paises => {
      this.paises = paises;
      this.cargando = false;
      
      // angular material
      this.dataSource.paginator = this.paginator;
      this.dataSource = new MatTableDataSource(this.paises);


      // Muestre el mensaje
      this.openSnackBar();
    }, error => {
      this.textoCargando = 'Error en la carga';
      
    } );

    

  }


  openSnackBar() {
    this._snackBar.open('Paises Cargados', 'Hecho', {
      duration: 2000,
    });
  }






}
