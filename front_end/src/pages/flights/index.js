import MultiChoice from "../../components/multi_choice";
import RoundTrip from "../../components/round_trip";

const Flights = () => {
    return ( 
        <>
            <MultiChoice item1={'RoundTrip'} item2={'One-Way'} item3={'Multi-city'}/>
            <RoundTrip />
        </>
     );
}
 
export default Flights;
