import {ADD_STUDENT, EDIT_STUDENT} from "../actionTypes/studentsAT"

const initialState ={students:[], unactive: []}

export const studentsReducer = (state = initialState, action) =>{
  switch(action.type){
 
   case ADD_STUDENT :
     return {...state, students:[...state.students,action.payload]}
   
     case EDIT_STUDENT :
      return {...state,students:state.students.map(student => {
        if(student.id === action.payload.id){
          student.name = action.payload.name
          student.phase = action.payload.phase 
        }
        return student
      })}
    
     default:
       return state
  }
}
