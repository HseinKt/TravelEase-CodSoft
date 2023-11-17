import { useEffect, useState } from "react";
import MultiChoice from "../../components/multi_choice";
import MultiCity from "../../components/multi_city";
import OneWay from "../../components/one_way";
import RoundTrip from "../../components/round_trip";
import { fetchFlightData } from "./flightService";

const Flights = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [flightData, setFlightData] = useState(null);

    const handleClick = (item) => {
        setSelectedItem(item); 
        console.log("flight Item:", item);
    }

    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     console.log("flight token : "+token);

    //     fetchFlightData(token)
    //     .then(data => setFlightData(data))
    //     .catch(error => console.error('Error fetching flight data 2 :', error));
    // }, [selectedItem]);

    const renderSelectedComponent = () => {
        switch (selectedItem) {
            case 'RoundTrip':
                return <RoundTrip flightData={flightData}/>;
            case 'One-Way':
                return <OneWay flightData={flightData}/>;
            case 'Multi-city':
                return <MultiCity flightData={flightData}/>;
            default:
                return <RoundTrip flightData={flightData}/>;
        }
    }
    return ( 
        <>
            <MultiChoice item1={'RoundTrip'} item2={'One-Way'} item3={'Multi-city'} handleClick={handleClick} />
            
            {renderSelectedComponent()}
        </>
     );
}
 
export default Flights;
