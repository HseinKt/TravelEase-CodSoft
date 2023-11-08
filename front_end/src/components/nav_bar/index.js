import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {

    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return ( 
        <div className="nav-bar">
            <ul className="nav">
                <li>
                    <NavLink
                        exact
                        to=""
                        className={` ${ selectedItem === props.item1 ? "selected" : ""}`}
                        onClick={() => handleItemClick(`${props.item1}`)}
                    >
                        {props.item1}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to=""
                        className={`${selectedItem === props.item2 ? "selected" : ""}`}
                        onClick={() => handleItemClick(props.item2)}
                    >
                        {props.item2}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to=""
                        className={`${selectedItem === props.item3 ? "selected" : ""}`}
                        onClick={() => handleItemClick(props.item3)}
                    >
                        {props.item3}
                    </NavLink>
                </li>
            </ul>
        </div>
     );
}
 
export default NavBar;