import {ADDTASK, REMOVETASK, TOGGLEADDTASK} from '../constants/index'


function rootReducer(state, action){
    if ( action.type === TOGGLEADDTASK ){
        return {
            showAddTask: !state.showAddTask
        }
    } 
}

export default rootReducer;