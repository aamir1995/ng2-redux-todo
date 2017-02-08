import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'add-todo',
    template: require('./addTodo.html'),
    styles: [require('./addTodo.scss')]
})
export class AddTodoComponent {
    @Output() newTodo = new EventEmitter
    todo: any;
    todosList: any[] = [];
    constructor() { };

    addTodo(todo: string) {
        console.log("todo from component", todo);
        // this.todosList.push(todo);
        if (this.todo) {
            console.log("emitttt TODO")
            return this.newTodo.emit(this.todo);
        }
        return alert("pelase add todo first");
        // setTimeout(() => {
        //     console.log(this.todosList);
        // }, 500);
    };
}