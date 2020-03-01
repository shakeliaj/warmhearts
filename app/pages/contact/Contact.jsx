import React from 'react';
import styled from 'styled-components';

const Contact = () => {
    return (
        <ContactContainer>
            <CardContainer>
                <Title>Contact Us</Title>
                <p>You can contact us by doing one of the following: </p>
                <Cards>
                    <Card />
                    <Card />
                </Cards>
            </CardContainer>
        </ContactContainer>
    )
}

const ContactContainer = styled.div`
  ${props => props.theme.pageContainer};
  justify-content: center;
  font-family: ${props => props.theme.primaryFontFamily};
`;

const CardContainer = styled.div`
    background-color: white;
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    border-radius: 4px;
    width: 90%;
    position: relative;
    text-align: center;
    border: 1px solid #1a9e92;
    box-shadow: 2px 2px #adadad;
    margin-top: 20px;
    margin-bottom: 50px;

    ${props => props.theme.media.mobile`
        width: 100%;
        margin-top: 0;
    `}
`;

const Title = styled.h1`
    transform: rotateZ(-30deg);
    width: 200px;
    padding: 10px;
    position: absolute;
    top: 5px;
    left: -15px;
    background-color: #1a9e92;
    color: white;
    box-shadow: 2px 2px #d3d3d3;

    ${props => props.theme.media.mobile`
        color: #1a9e92;
        margin-bottom: 0px;
        transform: none;
        position: relative;
        width: 100%;
        padding: 0;
        left: auto;
        background-color: transparent;
        box-shadow: none;
    `}
`;

const Cards = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;

    ${props => props.theme.media.mobile`
        flex-direction: column;
        align-content: center;
    `}
`;

const Card = styled.div`
    height: 200px;
    border: 1px solid red;
    display: inline -block;
    width: 45%;

    ${props => props.theme.media.mobile`
        margin-bottom: 30px;
        width: 100%;
    `}
`;

export default Contact;
