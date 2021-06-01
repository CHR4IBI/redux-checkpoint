import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import '../App.css'

const StyledContainer = styled.div`
    margin: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledDesc = styled.div`
    text-align: center;
`

const StyledCheckbox = styled.input`

`

const Task = ({desc, isDone, removeTask, editTask, toggleDone}) => {
    return (
        <React.Fragment>
            <StyledContainer>
                <StyledCheckbox type='checkbox' onClick={toggleDone}/>
                <StyledDesc className={isDone ? 'done' : null}>{desc}</StyledDesc>
                <Button text='Edit task' color='blue' onClick={editTask} />
                <Button text='Remove task' color='red' onClick={removeTask} />
            </StyledContainer>
        </React.Fragment>
    )
}

export default Task
