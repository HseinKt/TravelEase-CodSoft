import { useState } from "react";
import MultiChoice from "../../components/multi_choice";
import MultiCity from "../../components/multi_city";
import OneWay from "../../components/one_way";
import RoundTrip from "../../components/round_trip";

const Flights = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleClick = (item) => {
        setSelectedItem(item); 
        console.log("flight Item:", item);
    }

    const renderSelectedComponent = () => {
        switch (selectedItem) {
            case 'RoundTrip':
                return <RoundTrip />;
            case 'One-Way':
                return <OneWay />;
            case 'Multi-city':
                return <MultiCity />;
            default:
                return null;
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
