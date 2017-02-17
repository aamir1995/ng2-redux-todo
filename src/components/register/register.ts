import { Component, Input, Output, EventEmitter, OnChanges } from "@angular/core";

@Component({
    selector: 'register',
    template: require('./register.html'),
    styles: [require('./register.scss')]
})
export class RegisterComponent {
    // @Input() todo;
    // @Output() DelTodo = new EventEmitter();
    constructor() { };

    // ngOnChanges(changes) {
    // console.log(changes);
    // }
}