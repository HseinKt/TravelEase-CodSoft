import React, { useState } from "react";
import SearchInput from "../../components/search_input";
import DateTime from "../../components/date_time_input";
import NumberInput from "../../components/number_input";
import { useNavigate } from "react-router-dom";

const MultiCity = (props) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        departurePlace: "",
        arrivalPlace: "",
        departureTime: "",
        departurePlace2: "",
        arrivalPlace2: "",
        departureTime2: "",
        adults: 1,
        children: 0,
        price: 100,
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
        navigate("MulticityDetails", {state: formData});
        console.log(formData);
    };

    const departureAirports = props.flightData?.flights?.map((flight) => flight.departure_airport) || [];
    const arrivalAirports = props.flightData?.flights?.map((flight) => flight.arrival_airport) || [];

    return (
        <div >
            <form onSubmit={handleSubmit} className="hotel-booking-form">
                <div className="section_multi_city">
                    <div className="section">
                        <NumberInput id={"adults"} label={"Adults"} value={formData.adults} handleChange={handleChange}/>

                        <NumberInput id={"children"} label={"Children"} value={formData.children} handleChange={handleChange}/>
                    </div>
                    
                    <div className="section">
                        <SearchInput id={"departurePlace"} placeholder={"Going to"} value={formData.departurePlace} handleChange={handleChange} fieldName="departurePlace" option={arrivalAirports}/>

                        <SearchInput id={"arrivalPlace"} placeholder={"Leaving from"} value={formData.arrivalPlace} handleChange={handleChange} fieldName="arrivalPlace" option={departureAirports}/>
                    
                        <DateTime id={"departureTime"} label={"Departure Time"} value={formData.departureTime} handleChange={handleChange}/>                
                    </div>
                    
                    <div className="section">
                        <SearchInput id={"departurePlace"} placeholder={"Going to"} value={formData.departurePlace2} handleChange={handleChange} fieldName="departurePlace2" option={arrivalAirports}/>

                        <SearchInput id={"arrivalPlace"} placeholder={"Leaving from"} value={formData.arrivalPlace2} handleChange={handleChange} fieldName="arrivalPlace2" option={departureAirports}/>
                    
                        <DateTime id={"departureTime"} label={"Departure Time"} value={formData.departureTime2} handleChange={handleChange}/>                
                    </div>

                    <div className="section">
                        <button type="submit" className="btn">Search</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default MultiCity;

