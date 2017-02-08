import { Component, Input, Output, EventEmitter, OnChanges } from "@angular/core";

@Component({
    selector: 'show-todo',
    template: require('./showTodo.html'),
    styles: [require('./showTodo.scss')]
})
export class ShowTodoComponent {
    @Input() todo;
    @Output() DelTodo = new EventEmitter();
    constructor() { };

    ngOnChanges(changes) {
        console.log(changes);
    }

    delTodo(todo) {
        this.DelTodo.emit(todo);
    }
}