import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'signin',
  template: require('./signin.html'),
  styles: [require("./signin.scss")]
})
export class SigninContainer implements OnInit {

  constructor(private router: Router) {
    // this.loader = true;
  }

  ngOnInit() { }

}