import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService } from '../../providers'
import { Observable, select, CounterActions, TodoActions } from '../../store';

@Component({
  selector: 'home',
  template: require('./home.html'),
  styles: [require("./home.scss")]
})
export class HomeContainer {
  @select(['todo', 'todo']) todo$: Observable<any>;
  constructor(private ta: TodoActions, private fb: FirebaseService) {
  }

  ngOnInit() {
    this.ta.fetchTodo();
  }

  addTodo(e) {
    let obj = {}
    let pushKey = firebase.database().ref().push();
    obj['todos/' + pushKey.key] = { 'todo': e, 'timestamp': firebase.database['ServerValue'].TIMESTAMP };
    this.fb.saveMultipath(obj);
  };

  keys(object: {}) {
    return Object.keys(object);
  }

  delTodo(e) {
    console.log("del Todo from COntainer delTodo Func", e);
    this.ta.removeTodo(e);
  }

}
