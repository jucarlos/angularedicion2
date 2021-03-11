import { UsuarioService } from './../../services/usuarios.service';
import { Component } from '@angular/core';


@Component({
     selector: 'app-navbar',
     templateUrl: './navbar.component.html',
})
export class NavbarComponent {

    constructor(public usuarioService: UsuarioService) {}

    titulo = 'Angular Ed. 2';

    


}