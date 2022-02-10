import { Component } from '@angular/core';

@Component({
    selector: 'app-fechaactual',
    templateUrl: './fechaactual.component.html'
})

export class FechaactualComponent {
    hoy: any = new Date();
}