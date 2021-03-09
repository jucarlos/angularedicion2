import { TemarioService } from './../../services/temario.service';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() dato: any;
  @Input() cabecera: string = 'No viene cabecera';
  @Input() numero = 0;
  @Input() mostrarImagen = true;

  @Output() eventoMeGusta: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  meGusta() {
    console.log('Evento hijo');
    this.eventoMeGusta.emit(1);

  }

}
