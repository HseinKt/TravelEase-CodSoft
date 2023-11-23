import { useEffect, useState } from "react";
import SearchInput from "../../components/search_input";
import DateTime from "../../components/date_time_input";
import TimeInput from "../../components/time_input";
import { fetchFlightData } from "../flights/flightService";

const CarHire = () => {
    const [formData, setFormData] = useState({
        departurePlace: "",
        departureTime: "",
        arrivalTime: "",
        pick_up_time: "",
        drop_off_time: "",
        price: 0,
    });
    const [flightData, setFlightData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    console.log("date: " + formData.departureTime)

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(formData);
    };

    useEffect(() => {
        fetchFlightData()
        .then(data => {
            console.log("data CAR hire:  ",data);
            setFlightData(data);
            // console.log("flightData:  ",flightData);
        }) 
        .catch(error => console.error('Error fetching flight data 2 :', error));
    }, []);

    const departure_place = flightData?.cars?.map((car) => car.departure_place) || [];

    return (
        <div >
            <form onSubmit={handleSubmit} className="hotel-booking-form">
                <SearchInput id={"departurePlace"} placeholder={"Pick-up"} value={formData.departurePlace} handleChange={handleChange} fieldName="departurePlace" option={departure_place}/>

                <DateTime id={"departureTime"} label={"Departure Time"} value={formData.departureTime} handleChange={handleChange}/>
                
                <DateTime id={"arrivalTime"} label={"Arrival Time"} value={formData.arrivalTime} handleChange={handleChange}/>
                             
                <TimeInput id={"pick_up_time"} placeholder={"pick-up time"} value={formData.pick_up_time} handleChange={handleChange} fieldName="pick_up_time"/>
                
                <TimeInput id={"drop_off_time"} placeholder={"drop-off time"} value={formData.drop_off_time} handleChange={handleChange} fieldName="drop_off_time"/>

                <button type="submit" className="btn">Search</button>
            </form>
        </div>
    );
}
 
export default CarHire;