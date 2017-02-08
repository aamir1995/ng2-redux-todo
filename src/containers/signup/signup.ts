import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Observable, select, AuthActions } from '../../store';

@Component({
    selector: 'signup',
    template: require('./signup.html'),
    styles: [require("./signup.scss")]
})
export class SignupContainer {
    @select(['auth', 'isRegistered']) isRegistered$: Observable<boolean>;
    @select(['auth', 'isLoading']) isLoading$: Observable<boolean>;
    @select(['auth', 'isError']) isError$: Observable<any>;

    uId$: BehaviorSubject<string>;
    userId: any = { 'checkUserId': false };
    emailRegx: RegExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    constructor(private router: Router) { }

}
