import { Component, Input, Output, EventEmitter, OnChanges } from "@angular/core";

@Component({
    selector: 'login',
    template: require('./login.html'),
    styles: [require('./login.scss')]
})
export class LoginComponent {
    // @Input() todo;
    // @Output() DelTodo = new EventEmitter();
    constructor() { };

    // ngOnChanges(changes) {
    // console.log(changes);
    // }
}