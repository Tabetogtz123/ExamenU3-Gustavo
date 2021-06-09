import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  heroes: any[] = [
    { id: 11, nombre: 'Fernando', apellidos: 'Ureña Gómez', genero:
'hombre', descripcion: 'Instructor' },
{ id: 12, nombre: 'María', apellidos: 'Pérez Almendro', genero:
'mujer', descripcion: 'Amiga de la infancia' },
{ id: 13, nombre: 'Federico', apellidos: 'Caballero Sánchez',
genero: 'hombre', descripcion: 'Compañero de trabajo' }
  ]

  ngOnInit(): void {
  }

}


