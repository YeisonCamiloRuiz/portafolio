import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './components/home/home.component';
import { IonicModule } from '@ionic/angular';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ContactoComponent } from './components/contacto/contacto.component';


@NgModule({
  declarations: [
    HomeComponent,
    InicioComponent,
    ProyectosComponent,
    SobreMiComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    IonicModule.forRoot()
  ]
})
export class LayoutModule { }
