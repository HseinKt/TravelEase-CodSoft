import React, { useState } from "react";

const SearchInput = (props) => {

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
      // Hide the search box after selecting an option
      setShowSearchBox(false);
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
          {/* Assume search results are fetched from an API */}
          <div
            className="search-option"
            onClick={() => handleSelectOption("")}
          >
            <span className="nothing" >{props.placeholder}</span>
          </div>
          {!!props.option && props.option
            .map((option, i) =>{
              return <div key={i} className="search-option" onClick={() => handleSelectOption(option)}>
                {option}
              </div>
            })
          }
        </div>
      )}

    </div>
  );
};

export default SearchInput;
