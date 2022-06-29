import { LOG_USER, REG_USER } from "../actionTypes/userAT"

const initialState = { user: [] }

export const userReducer = (state = initialState, action) => {
switch (action.type) {
  case LOG_USER:
    return {...state, user:[action.payload]}
    case REG_USER:
      console.log(action.payload)
      return {...state,user:[action.payload]}
case "LOGOUT":
  return {...state, user:[]}
  default:
    return state
  }
}
