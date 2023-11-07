import { useState } from "react";

const DropDown = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return ( 
        <div className="dropdown">

            <div className="dropdown-trigger" onClick={toggleDropdown}>
                Click me
                <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
            </div>

            {isOpen && (
                <ul className="dropdown-list">
                    <li>FLIGHTS</li>
                    <li>HOTELS</li>
                    <li>CAR HIRE</li>
                </ul>
            )}
        </div>
     );
}
 
export default DropDown;