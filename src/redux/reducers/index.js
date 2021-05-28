import {TOGGLEADDTASK, ADDTASK, REMOVETASK} from '../constants/index'


function rootReducer(state, action){
    if ( action.type === TOGGLEADDTASK ){
        return {...state, showAddTask: state.showAddTask === false ? true : false }
    } 
    if ( action.type === ADDTASK ){
        return { tasks: [...state.tasks, 
        {
            id: Math.random(),
            desc: action.payload.current.value,
            isDone: false,}] 
        }
    }
    if ( action.type === REMOVETASK ){
        return { tasks : state.tasks.filter(e => e.id !== action.payload)}
    }
    return state
}

export default rootReducer;