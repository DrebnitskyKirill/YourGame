import { FIND_QUESTION } from "../actionTypes/findQuestion"

const initialState = { rightQuestion: [0] }

export const findQuestionREducer = (state = initialState, action) => {
switch (action.type) {
  case FIND_QUESTION :
  const copyState = [...state.rightQuestion]
  let newState = 0
  if(action.payload.data === action.payload.questions.answer){
    newState = copyState[0]+ action.payload.questions.questionValue
  } else {
    newState = copyState[0]- action.payload.questions.questionValue
  }
    return {...state, rightQuestion:[newState]}

  default:
    return state
  }
}
