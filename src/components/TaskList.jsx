import React from 'react'
import Task from './Task'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Button from './Button'
import AddTask from './AddTask'
import { toggleAddTask, addTask, removeTask, editTask, toggleDone } from '../redux/actions/index'
import { useRef } from "react"



const StyledMainContainer = styled.div`
    margin-top: 150px;

`

const StyledTaskListHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const mapStateToProps = state => {
    return {
        tasks: state.tasks,
        showAddTask: state.showAddTask
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleAddTask: action => dispatch(toggleAddTask(action)),
        addTask: task => dispatch(addTask(task)),
        removeTask: task => dispatch(removeTask(task)),
        editTask: task => dispatch(editTask(task)),
        toggleDone: task => dispatch(toggleDone(task))
    }
}

const TaskList = ({showAddTask, tasks, toggleAddTask, addTask, removeTask, editTask, toggleDone}) => {
    const taskToAdd = useRef()

    return (
        <StyledMainContainer>
            <StyledTaskListHeader>
                <h1 style={{textAlign: 'center', margin: '30px'}}>My Todo App With Redux</h1>
                <Button text='Show add panel' color='black' onClick={() => toggleAddTask()}/>
                { showAddTask === true ? <AddTask onClick={() => addTask(taskToAdd)} taskToAdd={taskToAdd}/> : null }
            </StyledTaskListHeader>
            {tasks.map(e => {
                return(
                    <Task key={e.id} desc={e.desc} isDone={e.isDone} removeTask={() => removeTask(e.id)} editTask={() => editTask(e.id)} toggleDone={() => toggleDone(e.id)}/>
                )
            })}
        </StyledMainContainer>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
