import { ADD_QUESTIONS } from "../actionTypes/questionsAT"

const initialState = { questions: [] }

export const questionReducer = (state = initialState, action) => {
switch (action.type) {

  case ADD_QUESTIONS :
    return {...state, questions:action.payload}

  default:
    return state
  }
}
