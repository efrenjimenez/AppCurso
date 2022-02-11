import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejeventbinding',
  templateUrl: './ejeventbinding.component.html',
  styleUrls: ['./ejeventbinding.component.css']
})
export class EjeventbindingComponent implements OnInit {

  texto = 'Originalmente el texto se carga así';

  constructor() { }

  ngOnInit(): void {
  }

  modTexto() {
    this.texto = 'Al pulsar el botón el texto se muestra así';
  }
}
