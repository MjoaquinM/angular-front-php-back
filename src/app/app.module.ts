import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* ANGULAR MARTERIAL DE LA APPLICACION */
import { AppAngularMaterialModule } from './app-angular-material/app-angular-material.module';

import { AppComponent } from './app.component';
import { FormularioUsuarioComponent } from './formulario-usuario/formulario-usuario.component';
import { AppRoutingModule } from './/app-routing.module';

import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FormularioUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppAngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
