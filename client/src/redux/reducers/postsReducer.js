import {ADD_POSTS} from '../actionTypes/postsAT'

const initialState = { posts: [] }

export const postsReducer = (state = initialState, action) => {
switch (action.type) {

  case ADD_POSTS :
    return {...state, posts:action.payload}

  default:
    return state
  }
}
