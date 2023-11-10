const NumberInput = (props) => {
    return ( 
        <div className="number-input">
            <label htmlFor={props.id}>{props.label}</label>
            <input
                type="number"
                id={props.id}
                name={props.id}
                value={props.value}
                onChange={props.handleChange}
            />
        </div>
     );
}
 
export default NumberInput;


// import React, { useState } from "react";

// const SearchInput = (props) => {

//     // const [departurePlace, setDeparturePlace] = useState('');

//     const [showSearchBox, setShowSearchBox] = useState(false);

//     const handleInputClick = () => {
//         // Toggle the visibility of the search box
//         setShowSearchBox(!showSearchBox);
//     };

//     const handleSelectOption = (selectedOption) => {
//         // setDeparturePlace(selectedOption);
//         {props.setValue(selectedOption)}
//         // Hide the search box after selecting an option
//         setShowSearchBox(false);
//     };

//   return (
//     <div className="search-input">
//       <div className="input-container">
//         <input
//           type="text"
//           id={props.id}
//           name={props.id}
//           placeholder={props.label}
//           className="input_departurePlace"
//           value={props.value}
//           onChange={props.handleChange}
//           onClick={handleInputClick}
//         />
//         <input
//                 type="number"
//                 id={props.id}
//                 name={props.id}
//                 value={props.value}
//                 onChange={props.handleChange}
//             />
//       </div>

//       {showSearchBox && (
//         <div className="search-box">
//           {/* Assume search results are fetched from an API */}
//           <div
//             className="search-option"
//             onClick={() => handleSelectOption("Option 1")}
//           >
//             Option 1
//           </div>
//           <div
//             className="search-option"
//             onClick={() => handleSelectOption("Option 2")}
//           >
//             Option 2
//           </div>
//           {/* Add more search options as needed */}
//         </div>
//       )}

//     </div>
//   );
// };

// export default SearchInput;
