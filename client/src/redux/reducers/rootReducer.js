import {combineReducers} from 'redux'
import {questionReducer} from './questionReducer'
import {findQuestionREducer} from './findQuestionREducer'
import { userReducer } from './userReducer'

export const rootReducer = combineReducers({
  questions: questionReducer,
  findQuestion: findQuestionREducer,
  user:userReducer
})
