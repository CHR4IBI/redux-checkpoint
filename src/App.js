import styled from 'styled-components'
import TaskList from './components/TaskList'
import React from 'react'

const StyledMainContainer = styled.div`
  display: flex;
  justify-content: center;
`


const App = () => {
  return (
    <StyledMainContainer>
      <TaskList />
    </StyledMainContainer>
  )
}

export default App
