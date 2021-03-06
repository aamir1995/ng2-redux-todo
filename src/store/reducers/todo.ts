import { TodoActions } from '../actions/todo';
interface IInitalState {
    todo: Object;
};

const InitalState: IInitalState = {
    todo: {}
};


export const TodoReducer = function (state: IInitalState = InitalState, action: { type: string, payload?: any }) {
    switch (action.type) {
        case TodoActions.FETCH_TODO_SUCCESS:
            // let todos = [...state.todo, ...action.payload];
            console.log('case TodoActions.FETCH_TODO_SUCCESS:', action.payload);
            let obj = state.todo;
            obj[action.payload.$key] = action.payload;
            return Object.assign({}, state, { todo: obj });
        case TodoActions.DEL_TODO_SUCCESS:
            console.log('case TodoActions.DEL_TODO_SUCCESS', state, action.payload, state.todo[action.payload]);
            delete state.todo[action.payload];
            return Object.assign({}, state);
        // let newState = [...state.todo];
        // return Object.assign({}, state, { todo: newState });
        default:
            return state;
    };
};