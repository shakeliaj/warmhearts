import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <FooterContainer>
    <FooterContent>
      <p>&copy;2020 Ingine Studios, LLC</p>
    </FooterContent>
  </FooterContainer>
);

const FooterContainer = styled.div`
  ${props => props.theme.footerBar};
  background-color: black;
  opacity: 0.8;
  color: white;
  font-family: ${props => props.theme.primaryFontFamily};
`;

const FooterContent = styled.div`
  padding-right: 20px;
`;

export default Footer;
