import React, { useState } from "react";
import SearchInput from "../../components/search_input";
import DateTime from "../../components/date_time";

const Hotels = () => {
    const [formData, setFormData] = useState({
        departurePlace: "",
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

    console.log("date: " + formData.mdepartureTime)

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can submit the form data to the server or perform other actions here
        console.log(formData);
    };

    return (
        <div >
            <form onSubmit={handleSubmit} className="hotel-booking-form">
                <SearchInput />

                <DateTime id={"departureTime"} label={"Departure Time"} value={formData.departureTime} handleChange={handleChange}/>
                <DateTime id={"arrivalTime"} label={"Arrival Time"} value={formData.arrivalTime} handleChange={handleChange}/>

                <div>
                    <label htmlFor="adults">Adults</label>
                    <input
                        type="number"
                        id="adults"
                        name="adults"
                        value={formData.adults}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="children">Children</label>
                    <input
                        type="number"
                        id="children"
                        name="children"
                        value={formData.children}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Book Now</button>
            </form>
        </div>
    );
};

export default Hotels;
