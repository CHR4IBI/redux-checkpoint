import {TOGGLEADDTASK, ADDTASK, REMOVETASK, EDITTASK, TOGGLEDONE} from '../constants/index'


function rootReducer(state, action){
    if ( action.type === TOGGLEADDTASK ){
        return {
            ...state, showAddTask: state.showAddTask === false ? true : false
        }
    } 
    if ( action.type === ADDTASK ){
        return { 
            tasks: [...state.tasks, 
        {
            id: Math.random(),
            desc: action.payload.current.value,
            isDone: false,}] 
        }
    }
    if ( action.type === REMOVETASK ){
        return { 
            tasks : state.tasks.filter(e => e.id !== action.payload)
        }
    }
    if ( action.type === EDITTASK ){
        return state
    }
    if ( action.type === TOGGLEDONE ){
        return state
    }

    return state
}

export default rootReducer;