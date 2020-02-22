import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navigation = ({ navigationList }) => {
  const navigationListItems = navigationList.map((item) => (
    <NavigationListItem key={item}>{item}</NavigationListItem>
  ));
  return (
    <NavigationContainer>
      <LogoIcon icon="atom" size="2x" />
      <Controls>
        <NavigationList>
          {navigationListItems}
        </NavigationList>
        <MenuIcon icon="bars" size="2x" />
      </Controls>
    </NavigationContainer>
  );
};

const NavigationContainer = styled.div`
    ${(props) => props.theme.navigationBar};
    background: rgb(32,198,182);
    background: linear-gradient(90deg, rgba(32,198,182,1) 0%, rgba(126,234,223,1) 50%, rgba(255,255,255,1) 100%);
    box-shadow: 0px 2px 0px rgba(0,0,0,0.1);
    color: #1a9e92;
    font-size: 18px;
    font-family: sans-serif;
    justify-content: space-between;
`;

const LogoIcon = styled(FontAwesomeIcon)`
    margin-left: 20px;
    color: white;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const NavigationList = styled.ul`
    list-style-type: none;
    ${props => console.log(props.theme.media)}
    ${props => props.theme.media.mobile`
      display: none;
    `}
`;

const NavigationListItem = styled.li`
    display: inline-block;
    margin-right: 20px;
    font-weight: 600;

    &:hover {
      color: #c0c0c0;
      cursor: default;
    }
`;

const MenuIcon = styled(FontAwesomeIcon)`
  margin-right: 20px;
  &:hover {
    color: #c0c0c0;
  }
  display: none;
  ${props => props.theme.media.mobile`
    display: block;
  `}
`;

Navigation.propTypes = {
  navigationList: PropTypes.array.isRequired,
};

export default Navigation;
