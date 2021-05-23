import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const StyledContainer = styled.div`
    margin: 50px;
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
`

const Task = ({id, desc, isDone, onClick}) => {
    return (
        <React.Fragment>
            <StyledContainer className={isDone ? 'done' : null}>
                <h2>{desc}</h2>
                <Button text='Remove task' color='red' onClick={onClick} />
            </StyledContainer>
        </React.Fragment>
    )
}

export default Task
