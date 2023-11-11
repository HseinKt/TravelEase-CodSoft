import MultiChoice from "../../components/multi_choice";
import OneWay from "../../components/one_way";
import RoundTrip from "../../components/round_trip";

const Flights = () => {
    return ( 
        <>
            <MultiChoice item1={'RoundTrip'} item2={'One-Way'} item3={'Multi-city'}/>
            <RoundTrip />
            <OneWay />
        </>
     );
}
 
export default Flights;
