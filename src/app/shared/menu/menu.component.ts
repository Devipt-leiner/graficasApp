import { Component, OnInit } from '@angular/core';

interface MenuItem {
  route: string
  text: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class MenuComponent implements OnInit {

  menuItem: MenuItem[] = [
    { route: '/graficas/barra', text: 'Barras' },
    { route: '/graficas/barras-dobles', text: 'Barras Dobles' },
    { route: '/graficas/dona', text: 'Dona' },
    { route: '/graficas/dona-http', text: 'Dona Http' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
