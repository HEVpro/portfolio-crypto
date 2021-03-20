import React, {useState, useEffect} from 'react';
import './index.css';
import styled from '@emotion/styled';
import img from './cryptos.png';
import Form from './components/form/form';
import axios from 'axios';
import Quotation from './components/quotation';
import Spinner from './components/spinner/spinner';

const Container = styled.div`
max-width: 992px;
margin: 0 auto;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
@media (min-widht:992px){
  display:grid;
  grid-template-columns:repeat(2, 1fr);
  column-gap: 2rem;
}
@media only screen and (max-width: 500px) {
  flex-direction: column;
}
`;

const Img = styled.img`
width: 85%;
margin-top:1rem;
@media only screen and (max-width: 500px) {
  display: none;
}

`;

const Header = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align:left;
  font-weight: 500;
  font-size: 45px;
  margin-bottom: 25px;
  &::after {
    content: '';
    width: 65px;
    height: 6px;
    background-color: #009c0d;
    display:block;
  }
`;

function App() {

  const [currency, setCurrencyState] = useState('');
  const [crypto, setCrypto] = useState('');
  const [quotation, setQuotation] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
   
    const quotation = async () => {
      if(currency === "") return;
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`;
      const response = await axios.get(url);
      setLoading(true);

      setTimeout(() => {
        setQuotation(response.data.DISPLAY[crypto][currency]);
        setLoading(false);
      }, 2500)
      
    } 
    quotation();   
  }, [currency,crypto] )

  
  return (
   <Container>
     <div className="header">
     <Header>Instant Crypto Quote</Header>
       <Img src={img} alt="Crypto image"/>
     </div>
     <div>
      
       <Form
        setCurrencyState={setCurrencyState}
        setCrypto={setCrypto}
       />
     </div>
     {loading ?  <Spinner /> : <Quotation response={quotation}/>}
   </Container>
  );
}

export default App;
