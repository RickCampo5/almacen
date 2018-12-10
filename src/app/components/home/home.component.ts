import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  bodegas = [
    {
      nombre: 'Meds',
      objetos: [
         {
          nombre: 'aspirina',
          qty: 3,
          caducidad: '15/05/2016'
        },
        {
          nombre: 'tylenol',
          qty: 5,
          caducidad: '15/06/2020'
        }
      ]
    },
    {
      nombre: 'Almacen',
      objetos: [
        {
          nombre: 'tornillos',
          qty: 20
        },
        {
          nombre: 'martillo',
          qty: 2
        }
      ]
    }
  ]

  ngOnInit() {
  }

}
