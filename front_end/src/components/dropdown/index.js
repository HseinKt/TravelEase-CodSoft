import { useState } from "react";

const DropDown = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(props.clicked);
    
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectItem = (item) => {
        setSelectedItem(item);
        toggleDropdown();
    };

    return ( 
        <div className="dropdown">
            <div className="dropdown-trigger" onClick={toggleDropdown}>
                {selectedItem}
                <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
            </div>

            {isOpen && (
                <ul className="dropdown-list">
                    <li onClick={() => handleSelectItem(props.item1)}>{props.item1}</li>
                    <li onClick={() => handleSelectItem(props.item2)}>{props.item2}</li>
                    <li onClick={() => handleSelectItem(props.item3)}>{props.item3}</li>
                </ul>
            )}
        </div>
     );
}
 
export default DropDown;