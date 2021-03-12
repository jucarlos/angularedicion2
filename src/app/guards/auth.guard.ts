import { UsuarioService } from './../services/usuarios.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private usuarioService: UsuarioService, private router: Router) {}


  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {


    console.log ( 'Pasando por el guard');
     
        
    if ( !this.usuarioService.estaAutenticado() ){
      Swal.fire('Autenticación', 'No estás autenticado', 'info');
      // this.router.navigateByUrl('/home');
      this.router.navigate(['/home']);
      return false;
    }
        
    return true;
  }





}
