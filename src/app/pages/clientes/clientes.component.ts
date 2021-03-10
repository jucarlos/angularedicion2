import { ClientesService } from './../../services/clientes.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from './../../models/cliente.models';
import { MatSnackBar } from '@angular/material/snack-bar';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  desde = 0;
  total = 0;

  constructor(private clienteService: ClientesService,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarClientes();
  }


  cargarClientes() {

    this.clienteService.getClientes( this.desde )
    .subscribe( (resp: any) => {

      this.total = resp.total;
      this.clientes = resp.clientes;
    })

  }

  cambiarDesde( idx: number ) {

    const desde = this.desde + idx;

    if ( desde >= this.total ) {
      Swal.fire('Clientes', 'No hay mas registros', 'info');
      return;
    }

    if ( desde < 0 ) {
      return;
    }

    this.desde += idx;

    this.cargarClientes();


  }

  borrarCliente(cliente: Cliente) {

    Swal.fire({
      title: 'Estas Seguro?',
      text: `Vas a borrar a ${cliente.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí. Bórralo'
    }).then((result) => {
      if (result.isConfirmed) {

        // al servicio para borrar el cliente
        this.clienteService.borrarCliente( cliente._id)
        .subscribe( (resp: any) => {

          if ( resp.ok ) {
            this.openSnackBar(cliente.nombre);
          } else {
            this.openSnackBar('Error');
          }

          this.cargarClientes();

        });

       
      }


    })


  }



  openSnackBar(nombre: string) {
    this._snackBar.open( nombre, 'Borrado', {
      duration: 2000,
    });
  }


}
