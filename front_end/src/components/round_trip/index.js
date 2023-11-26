import React, { useState } from "react";
import SearchInput from "../../components/search_input";
import DateTime from "../../components/date_time_input";
import NumberInput from "../../components/number_input";
import { useNavigate } from "react-router-dom";

const RoundTrip = (props) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        departurePlace: "",
        arrivalPlace: "",
        departureTime: "",
        arrivalTime: "",
        adults: 1,
        children: 0,
        price: 0,
    });

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
        navigate("/RoundTripDetails", {state: formData});
        console.log(formData);
    };

    const departureAirports = props.flightData?.flights?.map((flight) => flight.departure_airport) || [];
    const arrivalAirports = props.flightData?.flights?.map((flight) => flight.arrival_airport) || [];

    return (
        <div >
            <form onSubmit={handleSubmit} className="hotel-booking-form">
                <SearchInput id={"departurePlace"} placeholder={"Going to"} value={formData.departurePlace} handleChange={handleChange} fieldName="departurePlace" option={arrivalAirports}/>

                <SearchInput id={"arrivalPlace"} placeholder={"Leaving from"} value={formData.arrivalPlace} handleChange={handleChange} fieldName="arrivalPlace" option={departureAirports}/>
                
                <DateTime id={"departureTime"} label={"Departure Time"} value={formData.departureTime} handleChange={handleChange}/>
                
                <DateTime id={"arrivalTime"} label={"Arrival Time"} value={formData.arrivalTime} handleChange={handleChange}/>
                
                <NumberInput id={"adults"} label={"Adults"} value={formData.adults} handleChange={handleChange}/>

                <NumberInput id={"children"} label={"Children"} value={formData.children} handleChange={handleChange}/>
                
                <button type="submit" className="btn">Search</button>
            </form>
        </div>
    );
};

export default RoundTrip;
