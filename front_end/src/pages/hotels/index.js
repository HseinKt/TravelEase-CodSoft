import React, { useEffect, useState } from "react";
import SearchInput from "../../components/search_input";
import DateTime from "../../components/date_time_input";
import NumberInput from "../../components/number_input";
import { fetchFlightData } from "../flights/flightService";

const Hotels = () => {
    const [formData, setFormData] = useState({
        departurePlace: "",
        departureTime: "",
        arrivalTime: "",
        adults: 1,
        children: 0,
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
        // You can submit the form data to the server or perform other actions here
        console.log(formData);
    };

    useEffect(() => {
        fetchFlightData()
        .then(data => {
            setFlightData(data);
        })
        .catch(error => console.error('Error fetching flight data 2 :', error));
    });

    const departure_place = flightData?.hotels?.map((hotel) => hotel.departure_place) || [];

    return (
        <div >
            <form onSubmit={handleSubmit} className="hotel-booking-form">
                <SearchInput id={"departurePlace"} placeholder={"Going to"} value={formData.departurePlace} handleChange={handleChange} fieldName="departurePlace" option={departure_place}/>

                <DateTime id={"departureTime"} label={"Departure Time"} value={formData.departureTime} handleChange={handleChange}/>
                
                <DateTime id={"arrivalTime"} label={"Arrival Time"} value={formData.arrivalTime} handleChange={handleChange}/>
                
                <NumberInput id={"adults"} label={"Adults"} value={formData.adults} handleChange={handleChange}/>

                <NumberInput id={"children"} label={"Children"} value={formData.children} handleChange={handleChange}/>
                
                <button type="submit" className="btn">Search</button>
            </form>
        </div>
    );
};

export default Hotels;
