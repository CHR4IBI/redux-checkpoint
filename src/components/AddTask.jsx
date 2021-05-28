import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const StyledMainContainer = styled.div`

`

const AddTask = ({onClick, taskToAdd}) => {
    return (
        <StyledMainContainer>
            <input type='text' placeholder='Task...' ref={taskToAdd}></input>
            <Button color='green' text='Add a task' onClick={onClick}/>
        </StyledMainContainer>
    )
}

export default AddTask
