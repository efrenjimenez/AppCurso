import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangswitch',
  templateUrl: './ejdirectivangswitch.component.html',
  styleUrls: ['./ejdirectivangswitch.component.css']
})
export class EjdirectivangswitchComponent implements OnInit {

  jugadores: any[] = [
    { nombre: 'Earvin Jhonson', equipo: 'L.A. Lakers'},
    { nombre: 'Larry Bird', equipo: 'Boston Celtics'},
    { nombre: 'Michael Jordan', equipo: 'Chicago Bulls'},
    { nombre: 'Kareem Abdul-Jabbar ', equipo: 'L.A. Lakers'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
