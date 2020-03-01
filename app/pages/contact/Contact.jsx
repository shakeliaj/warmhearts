import React from 'react';
import styled from 'styled-components';

const Contact = () => {
    return (
        <ContactContainer>
            <h1>Contact</h1>
        </ContactContainer>
    )
}

const ContactContainer = styled.div`
  ${props => props.theme.pageContainer};
  font-family: ${props => props.theme.primaryFontFamily};
`;

export default Contact;
