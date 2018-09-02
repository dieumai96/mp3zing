import * as types from './../constant/action_constant';
import isEmpty from './../validation/isEmpty';
const initialState = {
  isAuthenticated: false,
  user: {},
  errors: {},
  isProcessing: false,
}
export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.data),
      }
    case types.SET_CURRENT_USER:
      return {
        ...state,
        user : action.data,
      }
    case types.LOGIN_FAILED:
      return {
        ...state,
        errors: action.data,
      }
    case types.SIGN_UP_SUCCESS :
      return {
        ...state,
      }  
    case types.SIGN_UP_FAILED : 
      return {
        ...state,
        errors : action.data,
      }  
    case types.START_PROCESS:
      return {
        ...state,
        isProcessing: true,
      }
    case types.END_PROCESS:
      return {
        ...state,
        isProcessing: false,
      }
    case types.LOG_OUT : 
      return {
        ...state,
        isAuthenticated : false,
      }
    default:
      return state
  }
}