import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {

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
                        className={selectedItem === "flights" ? "selected" : ""}
                        onClick={() => handleItemClick("flights")}
                    >
                        FLIGHTS
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to=""
                        className={selectedItem === "hotels" ? "selected" : ""}
                        onClick={() => handleItemClick("hotels")}
                    >
                        HOTELS
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to=""
                        className={selectedItem === "car-hire" ? "selected" : ""}
                        onClick={() => handleItemClick("car-hire")}
                    >
                        CAR HIRE
                    </NavLink>
                </li>
            </ul>
        </div>
     );
}
 
export default NavBar;