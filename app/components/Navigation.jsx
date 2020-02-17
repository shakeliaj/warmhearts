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
            <StyledFontAwesomeIcon icon="atom" size="2x" />
            <div>
                <NavigationList>
                    {navigationListItems}
                </NavigationList>
            </div>
        </NavigationContainer>
    );
};

const NavigationContainer = styled.div`
    border: 1px solid red;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    align-items: center;
    height: 50px;
    justify-content: space-between;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    margin-left: 20px;
`;

const NavigationList = styled.ul`
    list-style-type: none;
`;

const NavigationListItem = styled.li`
    display: inline-block;
    margin-right: 20px;
`;

Navigation.propTypes = {
    navigationList: PropTypes.array.isRequired
}

export default Navigation;
