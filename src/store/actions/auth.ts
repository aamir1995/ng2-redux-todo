import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState, Observable } from '../';
import { AngularFire } from 'angularfire2';

@Injectable()
export class AuthActions {

    static REGISTER: string = 'REGISTER';

    static ISLOGGEDIN: string = 'ISLOGGEDIN';

    static LOGIN: string = 'LOGIN';
    static LOGIN_SUCCESS: string = 'LOGIN_SUCCESS';
    static LOGIN_FAIL: string = 'LOGIN_FAIL';

    static NULL: string = 'NULL';

    constructor(
        private ngRedux: NgRedux<IAppState>,
        private af: AngularFire
    ) {
        this.ngRedux.dispatch({
            type: AuthActions.ISLOGGEDIN
        });
    }

    register(user: Object): void {
        this.ngRedux.dispatch({
            type: AuthActions.REGISTER,
            payload: user
        });
    }

    login(credentials): void {
        this.ngRedux.dispatch({
            type: AuthActions.LOGIN,
            payload: credentials
        });
    }

}