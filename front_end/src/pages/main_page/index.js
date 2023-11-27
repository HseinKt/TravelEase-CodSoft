import { useState } from "react";
import Header from "../../components/header";
import NavBar from "../../components/nav_bar";
import CarHire from "../car_hire";
import Flights from "../flights";
import Hotels from "../hotels";
import image from "../../components/images/travelImage.jpg";

const MainPage = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleClick = (item) => {
        setSelectedItem(item); 
        console.log("mainPage Item:", item);
    }

    const renderSelectedComponent = () => {
        switch (selectedItem) {
            case 'FLIGHTS':
                return <Flights />;
            case 'HOTELS':
                return <Hotels />;
            case 'CAR-HIRE':
                return <CarHire />;
            default:
                return <Flights />;
        }
    }
    return ( 
        <>
            <Header item1={'FLIGHTS'} item2={'HOTELS'} item3={'CAR-HIRE'} handleClick={handleClick}/>

            <NavBar item1={'FLIGHTS'} item2={'HOTELS'} item3={'CAR-HIRE'} handleClick={handleClick}/>

            {renderSelectedComponent()}

            <div className="mainImage">
                <img src={image} alt="img" className="Image"/>
            </div>
        </>
     );
}
 
export default MainPage;
