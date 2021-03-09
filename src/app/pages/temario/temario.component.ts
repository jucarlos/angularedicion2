import { Component, OnInit } from '@angular/core';
import { TEMARIO } from 'src/app/data/datostemario.json';

import { Tema } from '../../interfaces/tema.interface';
import { TemarioService } from './../../services/temario.service';

@Component({
  selector: 'app-temario',
  templateUrl: './temario.component.html',
  styleUrls: ['./temario.component.css']
})
export class TemarioComponent implements OnInit {

  temas: Tema[] = [];

  meGustan = 0;


  constructor(private temarioService: TemarioService ) { }

  
  ngOnInit(): void {

    this.temas = this.temarioService.getTemario();

  }

  eventoRecibido( evento: number ): void {

    this.meGustan = this.meGustan + evento;
    
  }
  

}
