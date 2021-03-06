import { AuthActions } from '../actions';
// import { IlocalStorageUser, ICheckedinInfo } from '../models';

interface IInitalState {
  isLoading: boolean;
  isError: { status: boolean, msg: string }
  isLoggedin: boolean;
  presence: boolean;
  checkedIn: { isCheckedIn: boolean, data: Object };
  // user: IlocalStorageUser;
  isRegistered: boolean;
  location: { lat: number, lng: number };
}

const InitalState: IInitalState = {
  isLoading: false,
  isError: { status: false, msg: null },
  isLoggedin: false,
  presence: false,
  checkedIn: { isCheckedIn: false, data: null },
  // user: null,
  isRegistered: false,
  location: { lat: 0, lng: 0 }
};

export const authReducer = function (state: IInitalState = InitalState, action: { type: string, payload?: any }) {
  switch (action.type) {
    case AuthActions.LOGIN_FAIL:
      return Object.assign({}, state, { isLoading: false, isLoggedin: false, user: null });
    // case AuthActions.LOGIN_SUCCESS:
    //   return Object.assign({}, state, { isLoading: false, isLoggedin: true, user: action.payload });
    // case AuthActions.LOGOUT_FAIL:
    //   return Object.assign({}, state, { isLoading: false, isLoggedin: false, user: null });
    // case AuthActions.LOGOUT_SUCCESS:
    //   return Object.assign({}, state, { isLoading: false, isLoggedin: false, user: null });
    // case AuthActions.LOGIN:
    //   return Object.assign({}, state, { isLoading: true });
    // case AuthActions.SETCURRENTUSERDATA:
    //   return Object.assign({}, state, { user: Object.assign({}, state.user, action.payload) });
    // case AuthActions.REGISTER:
    //   return Object.assign({}, state, { isLoading: true });
    // case AuthActions.REGISTER_SUCCESS:
    //   return Object.assign({}, state, { isLoading: false, isRegistered: true, isError: action.payload.isError });
    // case AuthActions.REGISTER_FAIL:
    //   return Object.assign({}, state, { isLoading: false, isError: action.payload.isError });
    // case AuthActions.USERONLINE_SUCCESS:
    //   return Object.assign({}, state, { presence: true });
    // case AuthActions.USERONLINE_FAIL:
    //   return Object.assign({}, state, { presence: false });
    // case AuthActions.USERCHECKEDIN_SUCCESS:
    //   return Object.assign({}, state, { checkedIn: { isCheckedIn: true, data: action.payload } });
    // case AuthActions.USERCHECKEDIN_FAIL:
    //   return Object.assign({}, state, { checkedIn: { isCheckedIn: false, data: null } });
    // case AuthActions.USERCURRENTLOCATION:
    //   return Object.assign({}, state, { location: action.payload })
    default:
      return state;
  }
}