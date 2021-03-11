import { UsuarioService } from './../../services/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  usuario: Usuario = new Usuario('','', '');
  recuerdame = false;

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  entrar() {
    
    this.usuarioService.login(this.usuario  , this.recuerdame)
    .subscribe( resp => {
      console.log( resp );
    })

  }

}
