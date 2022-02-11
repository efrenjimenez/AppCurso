import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMenuitem]'
})

export class MenuitemDirective {

  constructor() { }

  @HostBinding('class.itemOrange') private mostrar: boolean = false;

  @HostListener('mouseover') onOver() {
    this.mostrar = true;
  }

  @HostListener('mouseout') onOut() {
    this.mostrar = false;
  }

}
