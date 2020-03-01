import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navigation = ({ navigationList }) => {
  const navigationListItems = navigationList.map((item, index) => {
    const { label, path } = item;
    return (
      <NavigationListItem key={index}>
        <NavigationLink href={path}>{label}</NavigationLink>
      </NavigationListItem>
    )
  });
  const [isOpen, toggleMenu] = useState(false);
  const icon = isOpen ? "chevron-up" : "bars";
  const openClass = isOpen ? 'open' : '';

  return (
    <NavigationContainer>
      <LogoIcon icon="atom" size="2x" />
      <Controls>
        <NavigationList>
          {navigationListItems}
        </NavigationList>
        <MenuIcon className={openClass} icon={icon} size="2x" onClick={() => toggleMenu(!isOpen)} />
        <MobileControls className={openClass}>
          <MobileNavigationList>{navigationListItems}</MobileNavigationList>
        </MobileControls>
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
  font-size: 14px;
  font-family: ${props => props.theme.primaryFontFamily};
  justify-content: space-between;
  z-index: 1000;
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
  ${props => props.theme.media.mobile`
    display: none;
  `}
`;

const MobileControls = styled.div`
  ${props => props.theme.media.mobile`
    display: block;
    position: absolute;
    left: 0;
    top: 52px;
    height: 0px;
    overflow: hidden;
    margin-top: 0px;
    width: 100%;
    padding-left: 0;
    z-index: 1;
    transition: all 0.5s ease;

    &.open {
      height: 500px;
    }
  `} ;
  display: none;
`;

const MobileNavigationList = styled.ul`
  padding: 0;
  margin: 0;
`;

const NavigationListItem = styled.li`
  display: inline-block;
  margin-right: 20px;
  font-weight: 600;
  ${props => props.theme.media.mobile`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    padding: 10px;
    margin-right: 0;
    background-color: white;
    border-bottom: 1px inset #d8d8d8;
  `};
`;

const NavigationLink = styled.a`
  color: #1a9e92;
  text-decoration: none;

  &:hover {
    color: #c0c0c0;
    cursor: pointer;
  }
`;

const MenuIcon = styled(FontAwesomeIcon)`
  ${props => props.theme.media.mobile`
    display: block;
    margin-right: 20px;

    &:hover, &.open {
      color: #c0c0c0;
    }
  `};
  display: none;
`;

Navigation.propTypes = {
  navigationList: PropTypes.array.isRequired,
};

export default Navigation;
