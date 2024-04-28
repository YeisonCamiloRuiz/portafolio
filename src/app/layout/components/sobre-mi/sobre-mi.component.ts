import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss'],
})
export class SobreMiComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Hola")
  }

  dataCard=[
    {
      pathImg:'https://ionicframework.com/docs/img/demos/card-media.png',
      titleCard:'Titulo',
      textCard:'iusdbiugsdbiusdfiugbiusdfbfgsdbfuhsedvgbfsdguiyhfgusdhfgsuyfghsdgfuysdgyufsdguyfgsdyufguysdgfuhsd'
    },
    {
      pathImg:'https://ionicframework.com/docs/img/demos/card-media.png',
      titleCard:'Titulo',
      textCard:'iusdbiugsdbiusdfiugbiusdfbfgsdbfuhsedvgbfsdguiyhfgusdhfgsuyfghsdgfuysdgyufsdguyfgsdyufguysdgfuhsd'
    },
    {
      pathImg:'https://ionicframework.com/docs/img/demos/card-media.png',
      titleCard:'Titulo',
      textCard:'iusdbiugsdbiusdfiugbiusdfbfgsdbfuhsedvgbfsdguiyhfgusdhfgsuyfghsdgfuysdgyufsdguyfgsdyufguysdgfuhsd'
    },
    {
      pathImg:'https://ionicframework.com/docs/img/demos/card-media.png',
      titleCard:'Titulo',
      textCard:'iusdbiugsdbiusdfiugbiusdfbfgsdbfuhsedvgbfsdguiyhfgusdhfgsuyfghsdgfuysdgyufsdguyfgsdyufguysdgfuhsd'
    }
  ]
}
