import React, {useState} from 'react';
import './styles.css';

function ExtraProductDropDown(props) {
  const [isOpen, setIsOpen] = useState(false);

  const extras = ['Sumo Laranja Natural', 'Água', 'Coca-cola'];

  const onClickHandler = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className="extraProductDropDown_container">
      <div
        className="extraProductDropDown_section"
        onClick={onClickHandler}
      >
        <div>
          <div className="extraProductDropDown_text">Deseja um extra?</div>
          <div className="extraProductDropDown_subText">
            Escolha até 50
          </div>
        </div>
        <img
          src={require('../../images/arrow_icon.png')}
          className="extraProductDropDown_Arrow"
          alt="arrow"
        />
      </div>
      {isOpen && (
        <div>
          {extras.map((value) => {
            return (
              <div className="extraProductDropDown_sectionMore">
                <button className="extraProductDropDown_iconMore">
                  +
                </button>
                <span>{value}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ExtraProductDropDown;
