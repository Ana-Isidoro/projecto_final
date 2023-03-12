import {useState} from 'react';
import Input from '../../components/Input';
import './styles.css';

const CreateReservation = ({onSave}) => {
  const [numbPlaces, setNumbPlaces] = useState('');
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [type, setType] = useState('');

  const handleOnSave = () => {
    if (numbPlaces && name && time && type) {
      onSave({numbPlaces, name, time, type});
    } else {
      alert('Por favor preencha todos os campos');
    }
  };

  return (
    <div className="reservations_container">
      <label>Nº de pessoas</label>
      <Input
        type="number"
        max="10"
        onChange={(event) => setNumbPlaces(event.target.value)}
        name="numbPlaces"
      />
      <label>Hora da reserva</label>
      <Input
        onChange={(event) => setTime(event.target.value)}
        name="time"
        type="time"
        min="09:00"
        max="18:00"
      />
      <label>Nome da reserva</label>
      <Input
        onChange={(event) => setName(event.target.value)}
        name="name"
      />
      <label>Tipo</label>
      <select
        onChange={(event) => setType(event.target.value)}
        name="type"
      >
        <option value="">-- escolha uma opção --</option>
        <option value="Interior">Interior</option>
        <option value="Esplanada">Esplanada</option>
      </select>
      <button onClick={handleOnSave}>Reservar mesa</button>
    </div>
  );
};

const CancelReservation = ({numbPlaces, time, name, type, onCancel}) => {
  return (
    <div>
      <h4>Reserva em nome de {name}</h4>
      <h4>
        às {time} para {numbPlaces} pessoa(s)
      </h4>
      <h4>tipo: {type}</h4>
      <button onClick={onCancel}>cancelar</button>
    </div>
  );
};

const Reservations = () => {
  const reservation = localStorage.getItem('reservation');
  const parsedReservation = JSON.parse(reservation);
  const [savedReservation, setSavedReservation] =
    useState(parsedReservation);

  const saveReservation = (reservation) => {
    localStorage.setItem('reservation', JSON.stringify(reservation));
    setSavedReservation(reservation);
  };

  const cancelReservation = () => {
    setSavedReservation(null);
    localStorage.removeItem('reservation');
  };

  return parsedReservation ? (
    <CancelReservation
      numbPlaces={savedReservation.numbPlaces}
      name={savedReservation.name}
      type={savedReservation.type}
      time={savedReservation.time}
      onCancel={cancelReservation}
    />
  ) : (
    <CreateReservation onSave={saveReservation} />
  );
};

export default Reservations;
