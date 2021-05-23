import {createStore} from 'redux'
import rootReducer from '../reducers/index'

const initialState = {
    tasks: [
        {
            id: Math.random(),
            desc: 'Watch a movie',
            isDone: false,
        },
        {
            id: Math.random(),
            desc: 'Learn to code',
            isDone: false,
        },
        {
            id: Math.random(),
            desc: 'Buy some food',
            isDone: false,
        }
    ],
    showAddTask: false,
}

const store = createStore(rootReducer, initialState)

export default store