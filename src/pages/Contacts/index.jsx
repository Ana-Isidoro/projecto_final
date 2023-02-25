import React, {useEffect, useState} from 'react';
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';
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

  console.log(restaurantInfo);

  return (
    <div className="contacts_container">
      <img
        className="contactsImageRestaurant"
        src="https://res.cloudinary.com/dxqc90trp/image/upload/v1677329788/restaurant_bkdxqg.jpg"
        alt="contactsImage"
      />
      <div className="contacts_containerForm">
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
          <button className="contacts_button" onClick={sendUserMessage}>
            ENVIAR MENSAGEM
          </button>
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
      {restaurantInfo && (
        <iframe
          title="map"
          width="100%"
          height="250"
          frameborder="0"
          src={`https://maps.google.com/maps?q=${restaurantInfo.LatGeo},${restaurantInfo.LongGeo}&output=embed`}
        ></iframe>
      )}
      <div className="contacts_icons">
        <EmailShareButton
          size={32}
          round={true}
          className="contacts_shareIcon"
          url="localhost:3000"
        >
          <EmailIcon size={32} round={true} />
        </EmailShareButton>
        <TwitterShareButton
          size={32}
          round={true}
          className="contacts_shareIcon"
          url="localhost:3000"
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <FacebookShareButton
          size={32}
          round={true}
          className="contacts_shareIcon"
          url="localhost:3000"
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <WhatsappShareButton
          size={32}
          round={true}
          className="contacts_shareIcon"
          url="localhost:3000"
        >
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default Contacts;
