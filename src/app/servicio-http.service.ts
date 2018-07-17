import { Injectable } from '@angular/core';

import { HttpClientModule, HttpHeaders } from '@angular/common/http';

/*Usuario*/ 
import { Usuario } from './usuario';
/*HTTP*/
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ServicioHttpService {

  usuario = new Usuario('','');

  private servicioUsuarioBackEnd = 'localhost:8080/probando/servicio-angular-php.php';  // URL to web api

  constructor(private http: HttpClient) { }

  /** Obtener usuarios desde el servidor */
  enviarUsuario() {
    console.log("ENVIANDO FORMULARIO");
    this.http.get('localhost:8080/probando/servicio-angular-php.php').subscribe((data: Usuario) => this.usuario = {
              nombre: 'XX',
              contrasenia: 'EE'
          });
  }
}