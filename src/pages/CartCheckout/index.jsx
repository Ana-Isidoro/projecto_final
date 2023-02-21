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

  const meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  //TODO: falta ver o mês actual e mostrar apenas a partir desse mês

  const getYearsArray = (startYear, finalYear) => {
    const years = [];
    const numberOfYears = finalYear - startYear;
    console.log(numberOfYears);

    for (let i = 0; i < numberOfYears; i++) {
      console.log(startYear + i);
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
        value={cardNumber}
        type="number"
        min="1111111111111111"
        max="9999999999999999"
        onChange={(event) => {
          setCardNumber(event.target.value);
        }}
      />
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
      <p>Válido até</p>
      <select
        name="month"
        value={cardMonth}
        onChange={(event) => {
          setCardMonth(event.target.value);
        }}
      >
        <option value="">--</option>
        {meses.map((month) => (
          <option value={month}>{month}</option>
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
  );
};

export default CartCheckout;
