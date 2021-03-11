import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ClientesService } from './../../../services/clientes.service';
import { Cliente } from './../../../models/cliente.models';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  tituloBoton = 'Crear';
  guardando = false;

  cliente: Cliente = new Cliente('', '' , '');

  imagenSubir: File;
  imagenTemp: any;

  constructor(private activatedRoute: ActivatedRoute,
              private clienteService: ClientesService,
              private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(  params  => {

      const id = params['id'];

      if ( id !== 'nuevo') {
        this.tituloBoton = 'Actualizar';
        // servicio para traernos el clietn
        this.clienteService.getCliente(id)
        .subscribe( (resp: any) => {
            this.cliente = resp.cliente;
        });
      }
      

    } );
  }




  guardarCliente( formu :NgForm) {

    if ( formu.valid )  {
      this.guardando = true;
      this.clienteService.guardarCliente( this.cliente )
        .subscribe( resp => {
          this.guardando = false;
          Swal.fire('Guardado', `${resp.cliente.nombre}, ha sido guardado.`, 'success');
          console.log( resp );
          this.router.navigate(['/clientes']);
          // this.cliente = new Cliente('', '', '');
        }, error => {
          this.guardando = false;
          Swal.fire('Error', 'Error al guardar', 'error' );
        });
    }
    
  }

  seleccionImagen( archivo: File  ) {

    if ( !archivo ) {
      this.imagenSubir = null;
      return;
    }

    if ( archivo.type.indexOf ( 'image') < 0 ){
      Swal.fire('Sólo imágenes', 'El archivo no es una imágen válida', 'error');
      this.imagenSubir = null;
      return;
    }

    this.imagenSubir = archivo;

    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL( archivo );

    reader.onloadend = () => this.imagenTemp = reader.result;

  }
  cambiarImagen() {

    this.clienteService.cambiarImagen( this.imagenSubir, this.cliente._id )
    .then ( (resp: any ) => {
      if ( resp.ok ) {
        Swal.fire('Imagen actualizada', resp.mensaje, 'success');
        this.volver();
      }
    }).catch ( ( error ) => {
      Swal.fire('Error', 'Ha habido un error al actualizar la imagen', 'error');
    });

  }



  volver() {
    this.router.navigate(['/clientes']);
  }



}
