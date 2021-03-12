import { Component, OnInit } from '@angular/core';
import { TipovehiculosService } from './../../services/tipovehiculos.service';


@Component({
  selector: 'app-tipo-vehiculos',
  templateUrl: './tipo-vehiculos.component.html',
  styleUrls: ['./tipo-vehiculos.component.css']
})
export class TipoVehiculosComponent implements OnInit {

  tiposVehiculos = [];

  constructor(private tvService: TipovehiculosService) { }

  ngOnInit(): void {
    this.cargarTiposDeVehiculos();
  }

  cargarTiposDeVehiculos() {

    this.tvService.getTiposDeVehiculos().subscribe( (resp: any) => {
      // console.log( resp );
      this.tiposVehiculos = resp;
      // console.log( this.tiposVehiculos );

    }, error => {
      console.error('NO VIENEN LOS DATOS');
    })

  }

}
