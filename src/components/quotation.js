import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    margin: 12px;
    padding-top: 12.5px;
    width: 16em;
    color: #FFF;
    font-family: 'Bebas Neue', cursive;
    text-transform: uppercase;
`;
const Info = styled.p`
    
    font-size: 18px;
    font-family: Arial, Helvetica; 
`;

const Price = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: #44C900;
`;

const Quotation = ({response}) => {
    if(Object.keys(response).length === 0) return null;

    return ( 
        <Container>
            <h1>Information</h1>
            <Info>Price: <Price>{response.PRICE}</Price></Info>
            <Info>Higher Price: <Price>{response.HIGHDAY}</Price></Info>
            <Info>Lower Price: <Price>{response.LOWDAY}</Price></Info>
            <Info>Changed: <Price>{response.CHANGE24HOUR}</Price></Info>
            <Info>Last update: <Price>{response.LASTUPDATE}</Price></Info>
        </Container>
     );
}
 
export default Quotation;