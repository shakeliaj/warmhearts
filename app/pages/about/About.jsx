import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutContainer>
      <h1>About</h1>
    </AboutContainer>
  )
};

const AboutContainer = styled.div`
  ${props => props.theme.pageContainer};
  font-family: ${props => props.theme.primaryFontFamily};
`;

export default About;
