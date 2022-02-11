import { Component } from '@angular/core';

@Component({
    selector: 'app-fechaactual',
    template: `
            <p> Sevilla, {{ hoy | date:'d/M/y H:m'}}</p>
            <app-copyright></app-copyright>
            `
})

export class FechaactualComponent {
    hoy: any = new Date();
}