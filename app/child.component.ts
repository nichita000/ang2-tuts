import { Input, Component } from '@angular/core';

@Component({
    selector: 'child-comp',
    template: '<p>User name: {{lame}}</p>' +
    '<p>User ages: {{age}}</p>',
    styles: ['* {color: red}']
})

export class ChildComponent {
    @Input() lame: string;
    @Input() age: number;
}