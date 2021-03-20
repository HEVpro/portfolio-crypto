import React ,{Fragment, useState} from 'react';
import styled from '@emotion/styled';


const Label = styled.label`
    font-family:"Bebas Neue", cursive;
    color:#FFF;
    text-trasnform: uppercase;
    font-weight: bold; 
    font-size: 2rem;
    margin-top: 1.5rem;
    display: block;

`;
const Select = styled.select`
    width: 100%;
    display: block; 
    padding: 0.5rem;
    -webkit-appereance: none;
    border-radius: 10px;
    border: none;
    font-size: 1rem;
    outline:none;
`;
const useCrypto = (label, initialState, cryptoList) => {

    const [cryptoState, setCryptoState] = useState("");

    const CryptoSelector = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => setCryptoState(e.target.value)}
                value={cryptoState}
            >
                <option value="">Select currency</option>
               {cryptoList.map(crypto => (
                     <option key={crypto.CoinInfo.Id} value={crypto.CoinInfo.Name}>{crypto.CoinInfo.FullName}</option>
               ))}
            </Select>
        </Fragment>
    );
    return [cryptoState, setCryptoState, CryptoSelector];
}
export default useCrypto;