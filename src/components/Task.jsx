import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const StyledContainer = styled.div`
    margin: 50px;
    display: flex;
    justify-content: space-between;
`

const Task = ({desc, isDone, onClick}) => {
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
