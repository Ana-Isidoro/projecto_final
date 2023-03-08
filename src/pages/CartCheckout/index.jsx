import React, {useState} from 'react';
import Input from '../../components/Input';
import './styles.css';

const CartCheckout = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState(null);
  const [securityNumber, setSecurityNumber] = useState(null);
  const [cardMonth, setCardMonth] = useState('');
  const [cardYear, setCardYear] = useState(null);

  const months = [
    {monthName: 'Janeiro', code: 'Jan'},
    {monthName: 'Fevereiro', code: 'Feb'},
    {monthName: 'Março', code: 'Mar'},
    {monthName: 'Abril', code: 'Apr'},
    {monthName: 'Maio', code: 'May'},
    {monthName: 'Junho', code: 'Jun'},
    {monthName: 'Julho', code: 'Jul'},
    {monthName: 'Agosto', code: 'Aug'},
    {monthName: 'Setembro', code: 'Sep'},
    {monthName: 'Outubro', code: 'Oct'},
    {monthName: 'Novembro', code: 'Nov'},
    {monthName: 'Dezembro', code: 'Dec'},
  ];

  const getYearsArray = (startYear, finalYear) => {
    const years = [];
    const numberOfYears = finalYear - startYear;

    for (let i = 0; i < numberOfYears; i++) {
      years.push(startYear + i);
    }
    return years;
  };

  const currentYear = new Date().getFullYear();
  const years = getYearsArray(currentYear, currentYear + 100);

  return (
    <div>
      <p>Nome</p>
      <Input
        value={name}
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <p>Morada</p>
      <Input
        value={address}
        type="text"
        onChange={(event) => {
          setAddress(event.target.value);
        }}
      />
      <p>Número do cartão</p>
      <input
        className="cartCheckout_cardNumber"
        value={cardNumber}
        type="number"
        min="1000000000000000"
        max="9999999999999999"
        onChange={(event) => {
          setCardNumber(event.target.value);
        }}
      />

      <div className="cartCheckout_cardInfo">
        <div>
          <p>Código de Segurança</p>
          <input
            className="cartCheckout_securityNumber"
            type="number"
            min="100"
            max="999"
            value={securityNumber}
            onChange={(event) => {
              setSecurityNumber(event.target.value);
            }}
          />
        </div>

        <div>
          <p>Válido até</p>
          <select
            name="month"
            value={cardMonth}
            onChange={(event) => {
              setCardMonth(event.target.value);
            }}
          >
            <option value="">--</option>
            {months.map((value) => (
              <option value={value.code}>{value.monthName}</option>
            ))}
          </select>
          <select
            name="year"
            value={cardYear}
            onChange={(event) => {
              setCardYear(event.target.value);
            }}
          >
            <option value={null}>--</option>
            {years.map((year) => (
              <option value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;
