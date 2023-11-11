import React, { useState } from "react";
import SearchInput from "../../components/search_input";
import DateTime from "../../components/date_time_input";
import NumberInput from "../../components/number_input";

const MultiCity = () => {
    const [formData, setFormData] = useState({
        departurePlace: "",
        arrivalPlace: "",
        departureTime: "",
        departurePlace2: "",
        arrivalPlace2: "",
        departureTime2: "",
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
        console.log(formData);
    };

    return (
        <div >
            <form onSubmit={handleSubmit} className="hotel-booking-form">
                <div className="section_multi_city">
                    <div className="section">
                        <NumberInput id={"adults"} label={"Adults"} value={formData.adults} handleChange={handleChange}/>

                        <NumberInput id={"children"} label={"Children"} value={formData.children} handleChange={handleChange}/>
                    </div>
                    
                    <div className="section">
                        <SearchInput id={"arrivalPlace"} placeholder={"Leaving from"} value={formData.arrivalPlace} handleChange={handleChange} fieldName="arrivalPlace"/>
                    
                        <SearchInput id={"departurePlace"} placeholder={"Going to"} value={formData.departurePlace} handleChange={handleChange} fieldName="departurePlace"/>

                        <DateTime id={"departureTime"} label={"Departure Time"} value={formData.departureTime} handleChange={handleChange}/>                
                    </div>
                    
                    <div className="section">
                        <SearchInput id={"arrivalPlace"} placeholder={"Leaving from"} value={formData.arrivalPlace2} handleChange={handleChange} fieldName="arrivalPlace2"/>
                    
                        <SearchInput id={"departurePlace"} placeholder={"Going to"} value={formData.departurePlace2} handleChange={handleChange} fieldName="departurePlace2"/>

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

