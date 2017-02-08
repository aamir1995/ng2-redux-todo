import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState, Observable } from '../';

@Injectable()
export class TodoActions {

    static FETCH_TODO: string = 'ADD_TODO';
    static FETCH_TODO_SUCCESS: string = 'ADD_TODO_SUCCESS';
    static DEL_TODO: string = 'DEL_TODO';

    constructor(private ngRedux: NgRedux<IAppState>) { }

    fetchTodo() {
        console.log("FETCH_TODO from Dispatcher");
        this.ngRedux.dispatch({
            type: TodoActions.FETCH_TODO
        });
    };

    removeTodo(todo) {
        console.log("remove todo dispatcher", todo);
        this.ngRedux.dispatch({
            type: TodoActions.DEL_TODO,
            payload: todo
        });
    };

}