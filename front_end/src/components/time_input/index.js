import React, { useState } from "react";

const TimeInput = (props) => {
  const [showSearchBox, setShowSearchBox] = useState(false);

  const handleInputClick = () => {
    setShowSearchBox(!showSearchBox);
  };

  const handleSelectOption = (selectedOption) => {
    props.handleChange({
        target: {
            name: props.fieldName,
            value: selectedOption,
        },
    });
    setShowSearchBox(false);
  };

  const generateTimeOptions = () => {
    const options = [];
    for (let hours = 0; hours < 24; hours++) {
      for (let minutes = 0; minutes < 60; minutes += 15) {
        const time = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
        options.push(
          <div
            key={time}
            className="search-option"
            onClick={() => handleSelectOption(time)}
          >
            {time}
          </div>
        );
      }
    }
    return options;
  };

  return (
    <div className="search-input">
      <div className="input-container">
        <input
          type="text"
          id={props.id}
          name={props.id}
          placeholder={props.placeholder}
          className="input_departurePlace"
          value={props.value}
          onClick={handleInputClick}
        />
      </div>

      {showSearchBox && (
        <div className="search-box">
          {generateTimeOptions()}
        </div>
      )}
    </div>
  );
};

export default TimeInput;

