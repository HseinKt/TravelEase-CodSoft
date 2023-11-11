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
            onClick={() => handleSelectOption("Option 1")}
          >
            Option 1
          </div>
          <div
            className="search-option"
            onClick={() => handleSelectOption("Option 2")}
          >
            Option 2
          </div>
          {/* Add more search options as needed */}
        </div>
      )}

    </div>
  );
};

export default SearchInput;
