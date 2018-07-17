import { Component, OnInit } from '@angular/core';

import { ServicioHttpService } from '../servicio-http.service';

/*PARA FORMULARIOS REACTIVOS*/
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
/*CLASE USUARIO*/
import { Usuario } from '../usuario';


@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {

  /*usuarioForm = new FormGroup ({
    nombre: new FormControl(),
    contrasenia: new FormControl()
  });*/
  usuarioForm: FormGroup;

  //nombre = new FormControl();

  usuario = new Usuario('','');
  otroUsuario = new Usuario('Otro Usuario','contrasenia');

  cadenaAux: string;

  constructor(private fb: FormBuilder, private usuarioService: ServicioHttpService) { 
    this.crearForm();
  }

  crearForm() {
    this.usuarioForm = this.fb.group({
      nombre: ['',Validators.required], // <--- the FormControl called "name"
      contrasenia: '', // <--- the FormControl called "name"
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    //this.cadenaAux = "cambiando";
    //console.log('HOLA');
    //this.hero = this.prepareSaveHero();
    //this.heroService.updateHero(this.hero).subscribe(/* error handling */);
    console.log("HOLA");
    this.usuarioService.enviarUsuario();
    this.rebuildForm();
  }

  rebuildForm() {
    this.usuarioForm.reset({
      nombre: this.otroUsuario.nombre,
      contrasenia: this.otroUsuario.contrasenia
    });
  }

}
