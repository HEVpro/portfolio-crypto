import React, {Fragment, useState} from 'react';
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
const useCurrency = (label, initialState, Currencies) => {

    const [currency, setCurrency] = useState("");

    const CurrencySelector = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => setCurrency(e.target.value)}
                value={currency}
            >
                <option value="">Select currency</option>
                {Currencies.map(currency => (
                     <option key={currency.code} value={currency.code}>{currency.name}</option>
                ))}
            </Select>
        </Fragment>
    );
    return [currency, setCurrency, CurrencySelector];
}
export default useCurrency;