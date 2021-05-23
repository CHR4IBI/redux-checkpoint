import React from 'react'
import Task from './Task'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Button from './Button'
import AddTask from './AddTask'
import { addTask, removeTask, toggleAddTask } from '../redux/actions/index'

const StyledMainContainer = styled.div`
    margin-top: 150px;

`

const StyledTaskListHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const mapDispatchToProps = { addTask, removeTask, toggleAddTask }

const mapStateToProps = state => {
    return { 
        showAddTask: state.showAddTask, 
        tasks: state.tasks }
}

const TaskList = ({ addTask, removeTask, showAddTask, tasks, toggleAddTask}) => {
    return (
        <StyledMainContainer>
            <StyledTaskListHeader>
                <h1 style={{textAlign: 'center', margin: '30px'}}>My Todo App With Redux</h1>
                <Button text='Show add panel' color='black' onClick={toggleAddTask}/>
                { showAddTask ? <AddTask onClick={addTask}/> : null }
            </StyledTaskListHeader>
            {tasks.map(e => {
                return(
                    <Task key={Math.random()} id={e.id} desc={e.desc} isDone={e.isDone} onClick={removeTask} />
                )
            })}
        </StyledMainContainer>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
