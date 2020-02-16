import React from 'react';
import styled from 'styled-components';

const Navigation = () => {
  const pageNames = ['Home', 'About', 'Contact'];

  const NavigationListItems = () => pageNames.map((item) => (
    <li key={item}>{item}</li>
  ));
  return (
    <ul>
      <NavigationListItems />
    </ul>
  );
};
const NavigationButton = styled.button`
    width: 150px;
    height: 50px;
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.secondaryColor};
    border: 2px solid ${(props) => props.theme.accentColor};
`;


export default Navigation;
