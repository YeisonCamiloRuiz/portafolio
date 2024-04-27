import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './components/home/home.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    IonicModule.forRoot()
  ]
})
export class LayoutModule { }
