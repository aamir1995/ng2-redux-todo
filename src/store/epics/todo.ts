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
                return this.af.database.list('todos/')
            }).switchMap(todo => {
                return Observable.from(todo)
                    .map((ele) => {
                        return {
                            'type': TodoActions.FETCH_TODO_SUCCESS,
                            'payload': ele
                        }
                    })
            });

    removeTodoFromDb = (action$) =>
        action$.ofType(TodoActions.DEL_TODO)
            .switchMap(({payload}) => {
                console.log("DEL_TODO frm EPIC " + payload);
                return this.af.database.list('todos/').remove(payload)
                    .then(() => {
                        return { 'type': TodoActions.DEL_TODO_SUCCESS, 'payload': payload }
                    })
            });
}