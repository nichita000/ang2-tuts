import { Component } from '@angular/core';

@Component({
    selector: 'root',
    template: '<h1>Hello , {{name}} !</h1>' +
    '<child-comp [lame]="Nichita" [age]="19"></child-comp>'
})

export class AppComponent {
}