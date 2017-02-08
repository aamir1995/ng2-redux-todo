import { NgModule } from '@angular/core';
import { NgRedux, DevToolsExtension } from 'ng2-redux';
import { createEpicMiddleware } from 'redux-observable';

import { combineReducers } from 'redux';

// Reducers
import { authReducer, CounterReducer, TodoReducer } from './reducers';

// Actions
import { AuthActions, CounterActions, TodoActions } from './actions';
export { AuthActions, CounterActions, TodoActions } from './actions';

import { HttpService } from '../providers';

import { AuthEpics, TodoEpics } from './epics';

export { Observable } from 'rxjs';
export { select, NgRedux } from 'ng2-redux';
export { bindActionCreators } from 'redux';

export interface IAppState {
  todo?: Object;
  auth?: Object;
  counter?: Object;
}

export const AppReducer = combineReducers<IAppState>({
  auth: authReducer,
  counter: CounterReducer,
  todo: TodoReducer
});


@NgModule({
  providers: [
    // actions
    AuthActions,
    CounterActions,
    TodoActions
    // epics
    , AuthEpics
    , TodoEpics
    // other services
    , HttpService
  ]
})
export class StoreModule {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private devTool: DevToolsExtension,
    private ae: AuthEpics,
    private te: TodoEpics,
  ) {
    const middleware = [
      createEpicMiddleware(this.te.saveTodoToDb),
      createEpicMiddleware(this.te.removeTodoFromDb)
    ];
    this.ngRedux.configureStore(
      AppReducer,                                         // Main Reducer
      {},                                                 // Defailt State
      middleware,                                         // Middlewares
      [devTool.isEnabled() ? devTool.enhancer() : f => f] // Enhancers
    )
  }
} 