import { Component, Input, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'auth',
    template: require('./auth.html'),
    styles: [require('./auth.scss')]
})
export class AuthContainer {
    isUserRegistering: boolean;
    constructor(private route: ActivatedRoute, ) {
        this.route.params
            .subscribe((param) => { param['id'] === 'register' ? this.isUserRegistering = true : this.isUserRegistering = false; })
    }

}
