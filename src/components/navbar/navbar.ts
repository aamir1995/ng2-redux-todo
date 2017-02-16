import { Component, Input, Output, EventEmitter, OnChanges } from "@angular/core";

@Component({
    selector: 'navbar',
    template: require('./navbar.html'),
    styles: [require('./navbar.scss')]
})
export class NavbarComponent {
    // @Input() todo;
    // @Output() DelTodo = new EventEmitter();
    constructor() { };

    // ngOnChanges(changes) {
    // console.log(changes);
    // }
}