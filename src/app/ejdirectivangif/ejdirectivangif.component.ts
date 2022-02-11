import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangif',
  templateUrl: './ejdirectivangif.component.html',
  styleUrls: ['./ejdirectivangif.component.css']
})
export class EjdirectivangifComponent implements OnInit {

  nombre: string = "";
  capital: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  setResultado(){
    return this.capital === "Madrid" ? true : false;
}

}
