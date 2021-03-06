import React from 'react';
import styled from 'styled-components'

const Button = () => {
    return <IngineButton onClick={() => console.log('clicked')}>Submit</IngineButton>   
}

const IngineButton = styled.button`
    ${props => props.theme.button};
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.secondaryColor};
    border: 2px solid ${props => props.theme.accentColor};
`


export default Button;
