import {TOGGLEADDTASK, ADDTASK, REMOVETASK, EDITTASK, TOGGLEDONE} from '../constants/index'

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

export function editTask(payload){
    return {
        type: EDITTASK,
        payload
    }
}

export function toggleDone(payload){
    return {
        type: TOGGLEDONE,
        payload
    }
}

