import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  //public aviso: string = 'Este texto proviene del componente hijo';

  @Input() aviso: string ="";

  @Output() mensajeMarcado = new EventEmitter();

  leido: boolean = false;
  mensaje: string = "";

  detectar() {
    this.mensaje = this.aviso;
    this.mensajeMarcado.emit(this.mensaje);
  }

  marcar() {
      this.leido = !this.leido;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
