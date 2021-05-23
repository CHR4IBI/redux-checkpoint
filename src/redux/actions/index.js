import {ADDTASK, REMOVETASK, TOGGLEADDTASK} from '../constants/index'

export const addTask = () => {
    return {
        type: ADDTASK
    }
}

export const removeTask = () => {
    return {
        type: REMOVETASK
    }
}

export const toggleAddTask = () => {
    return {
        type: TOGGLEADDTASK 
    }
}

