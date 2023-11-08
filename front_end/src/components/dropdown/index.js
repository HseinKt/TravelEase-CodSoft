import { useState } from "react";

const DropDown = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return ( 
        <div className="dropdown">

            <div className="dropdown-trigger" onClick={toggleDropdown}>
                {props.clicked}
                <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
            </div>

            {isOpen && (
                <ul className="dropdown-list">
                    <li>{props.item1}</li>
                    <li>{props.item2}</li>
                    <li>{props.item3}</li>
                </ul>
            )}
        </div>
     );
}
 
export default DropDown;