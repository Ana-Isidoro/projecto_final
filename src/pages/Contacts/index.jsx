import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee, faBath} from '@fortawesome/free-solid-svg-icons';

const Contacts = () => {
  const [restaurantInfo, setRestaurantInfo] = useState();

  useEffect(() => {
    fetch('https://63f0a399ff1b45a1a43e7d50.mockapi.io/Contacts/5')
      .then((response) => response.json())
      .then((data) => setRestaurantInfo(data));
  }, []);
  console.log('data', restaurantInfo);

  return (
    <div>
      {restaurantInfo?.Name}
      <FontAwesomeIcon icon={faCoffee} />
      <FontAwesomeIcon icon={faBath} />
    </div>
  );
};

export default Contacts;
