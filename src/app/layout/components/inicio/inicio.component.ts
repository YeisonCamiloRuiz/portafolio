import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Hola")
  }

  titleNav=[
    {
      titie:'Inicio',
      path:''
    },
    {
      titie:'Sobre Mi',
      path:''
    },
    {
      titie:'Proyectos',
      path:''
    },
    {
      titie:'Contacto',
      path:''
    },
  ]

  imgTech=[
    {
      path:'../../../../assets/Img/icons8-html-logo.svg'
    },
    {
      path:'../../../../assets/Img/icons8-css-logo.svg'
    },
    {
      path:'../../../../assets/Img/icons8-javascript.svg'
    },
    {
      path:'../../../../assets/Img/icons8-typescript.svg'
    },
    {
      path:'../../../../assets/Img/angular.svg'
    },
    {
      path:'../../../../assets/Img/ionic.svg'
    },
  ]
}
