import React, {useEffect, useState} from 'react';
import Input from '../../components/Input';
import './styles.css';

const Contacts = () => {
  const [restaurantInfo, setRestaurantInfo] = useState();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('https://63f0a399ff1b45a1a43e7d50.mockapi.io/Contacts/5')
      .then((response) => response.json())
      .then((data) => {
        setRestaurantInfo(data);
      });
  }, []);

  const sendUserMessage = () => {
    // verificar se todos os campos estão preenchidos antes de enviar e apagar a informação
    const messageInfo = JSON.stringify({
      name,
      email,
      subject,
      message,
    });
    alert(messageInfo);
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="contacts_container">
      <div className="contacts_ClientInfo">
        <div className="contacts_nameEmail">
          <Input
            value={name}
            type="text"
            className="contacts_name"
            placeholder="Nome Completo"
            onChange={(event) => setName(event.target.value)}
          ></Input>
          <Input
            value={email}
            type="text"
            className="contacts_email"
            placeholder="E-mail"
            onChange={(event) => setEmail(event.target.value)}
          ></Input>
        </div>
        <Input
          value={subject}
          type="text"
          className="contacts_subject"
          placeholder="Assunto"
          onChange={(event) => setSubject(event.target.value)}
        ></Input>

        <textarea
          value={message}
          className="contacts_message"
          placeholder="Mensagem"
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>
        <button onClick={sendUserMessage}>ENVIAR MENSAGEM</button>
      </div>
      <div>
        <h2>Contactos</h2>
        <p>
          <strong>NOME</strong> {restaurantInfo?.Name}
        </p>
        <p>
          <strong>TELEFONE</strong> {restaurantInfo?.Phone}
        </p>
        <p>
          <strong>EMAIL </strong>
          {restaurantInfo?.Email}
        </p>
        <p>
          <strong>MORADA </strong>
          {restaurantInfo?.Address}
        </p>
        <p>{restaurantInfo?.PostalCode}</p>
      </div>
    </div>
  );
};

export default Contacts;
