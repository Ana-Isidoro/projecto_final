import React, {useState} from 'react';
import './styles.css';

function ExtraProductDropDown(props) {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="extraProductDropDown_textContainer">
          <div className="extraProductDropDown_text">Deseja um extra?</div>
        </div>
        <img
          src={require('../../images/arrow_icon.png')}
          className="extraProductDropDown_Arrow"
          alt="arrow"
        />
      </div>
      {isOpen && (
        <div>
          {props.extras.map((item) => {
            return (
              <div className="extraProductDropDown_sectionMore">
                <button
                  className="extraProductDropDown_iconMore"
                  onClick={() => props.onAddExtra(item)}
                >
                  +
                </button>
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ExtraProductDropDown;
