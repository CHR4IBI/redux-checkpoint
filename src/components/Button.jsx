import React from 'react'
import styled from 'styled-components'


const Button = ({ text, color, onClick }) => {

    const StyledButton = styled.button`
        background-color: ${color};
        border: none;
        color: white;
        font-weight: bold;
        border-radius: 15px;
        height: 30px;
        width: 100px;
        margin-left: 30px;
    `
    return (
        <StyledButton onClick={onClick}>
            {text}
        </StyledButton>
    )
}

export default Button
