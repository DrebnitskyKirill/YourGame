import {combineReducers} from 'redux'
import {questionReducer} from './questionReducer'
import {findQuestionREducer} from './findQuestionREducer'

export const rootReducer = combineReducers({
  questions: questionReducer,
  findQuestion: findQuestionREducer,
})
