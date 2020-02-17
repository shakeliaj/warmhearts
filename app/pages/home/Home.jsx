import React from 'react';
import styled from 'styled-components';

const Home = () => (
  <HomeContainer>
    <h1>Home</h1>
  </HomeContainer>
);

const HomeContainer = styled.div`
  ${props => props.theme.pageContainer};
`;

export default Home;
