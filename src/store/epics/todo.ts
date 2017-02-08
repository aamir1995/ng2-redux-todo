import { Observable, Observer } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import { AuthActions, TodoActions } from '../actions';
import { HttpService } from '../../providers';
import { appConfig } from '../../config/appConfig';


@Injectable()
export class TodoEpics {
    constructor(private http: HttpService, private af: AngularFire) { };

    saveTodoToDb = (action$) =>
        action$.ofType(TodoActions.FETCH_TODO)
            .switchMap(() => {
                console.log("FECTH_TODO frm EPIC");
                return this.af.database.list('todos')
            }).switchMap(todo => {

                return Observable.from(todo)
                    .map((ele) => {
                        return {
                            type: TodoActions.FETCH_TODO_SUCCESS,
                            payload: ele
                        }
                    })

                // console.log("from fetch epic ", todo);
                // return todo.map(ele => {
                //     console.log("single Todo", ele);
                //     return {
                //         type: TodoActions.FETCH_TODO_SUCCESS,
                //         payload: ele
                //     }
                // })
            });

}