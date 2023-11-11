import { useState } from "react";

const ClickMe = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectItem = (item) => {
        localStorage.setItem('type_of_service', item);
        toggleDropdown();
        // console.log(localStorage.getItem('type_of_service'));
    };

    return ( 
        <div className="dropdown">
            <div className="dropdown-trigger" onClick={toggleDropdown}>
                {props.clicked}
                <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
            </div>

            {isOpen && (
                <ul className="dropdown-list">
                    <li onClick={() => handleSelectItem(props.item1)}>{props.item1}</li>
                    <li onClick={() => handleSelectItem(props.item2)}>{props.item2}</li>
                    <li onClick={() => handleSelectItem(props.item3)}>{props.item3}</li>

                    {/* <li>{props.item1}</li> */}
                    {/* <li>{props.item2}</li>
                    <li>{props.item3}</li> */}
                </ul>
            )}
        </div>
     );
}
 
export default ClickMe;