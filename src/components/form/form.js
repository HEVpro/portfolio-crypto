import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import './form.css';

import useCurrency from '../../hooks/useCurrency';
import useCrypto from '../../hooks/useCrypto';
import Error from '../error';
import axios from 'axios';

const Button = styled.input`
    margin: 25px auto 0 auto;
    font-weight: bold;
    font-size: 15px;
    padding: 8px;
    background-color: #00ff15;
    border: none;
    width: 100%
    border-radius: 10px;
    color: black;
    transition: background-color .3s ease;

    &:hover{
        background-color: #009c0d;
        cursor:pointer; 
    }
`;

const Form = ({setCurrencyState, setCrypto}) => {

    //States
    const [cryptoList, setCryptoList] = useState([]);
    const [error, setError] = useState(false);

    const Currencies = [
        {code: "USD", name: "US Dollar"},
        {code: "EUR", name: "EURO"},
        {code: "GBP", name: "UK Pound"},
    ]
    //Custom hooks
    const [currency, setCurrency, CurrencySelector] = useCurrency("Choose a currency", "", Currencies);

    const [cryptoState, setCryptoState, CryptoSelector] = useCrypto("Choose a Crypto Currency", "", cryptoList);

    useEffect(() => {
        const query = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

            const resultado = await axios.get(url);

            setCryptoList(resultado.data.Data);
        }
        query();
    },[])
    const handleSubmit = e => {
        e.preventDefault();
        if(currency === "" || cryptoState === ""){
            setError(true);
            return;
        }
        setError(false);
        setCurrencyState(currency);
        setCrypto(cryptoState);

    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error message="All the fields are required!"/>: null}
            <CurrencySelector />
            <CryptoSelector />
            <Button
                type="submit"
                value="Calculate"
            ></Button>
        </form>
     );
}
 
export default Form;