import { FIND_QUESTION } from "../actionTypes/findQuestion"

const initialState = { righrQuestion: {} }

export const findQuestionREducer = (state = initialState, action) => {
switch (action.type) {
  case FIND_QUESTION :
    return {...state, questions:action.payload}

  default:
    return state
  }
}
