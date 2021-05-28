import {TOGGLEADDTASK, ADDTASK, REMOVETASK} from '../constants/index'

export function toggleAddTask(){
    return {
        type: TOGGLEADDTASK,
    }
}

export function addTask(payload){
    return {
        type: ADDTASK,
        payload,
    }
}

export function removeTask(payload){
    return {
        type: REMOVETASK,
        payload
    }
}

