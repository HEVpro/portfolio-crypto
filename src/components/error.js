import React from 'react';
import styled from '@emotion/styled';

const ErrorMessage = styled.p`
    background-color: #009c0d;
    padding: 0.5rem;
    color: #FFF;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: "Bebas Neue", cursive;
`;

const Error = ({message}) => {
    return (  
        <ErrorMessage>{message}</ErrorMessage>
    );
}
 
export default Error;