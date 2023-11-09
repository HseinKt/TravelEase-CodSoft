import React, { useState } from "react";
import SearchInput from "../../components/search_input";

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

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can submit the form data to the server or perform other actions here
        console.log(formData);
    };

    return (
        <div >
            <form onSubmit={handleSubmit} className="hotel-booking-form">
                <SearchInput />

                <div>
                    <label htmlFor="departureTime">Departure Time</label>
                    <input
                        type="datetime-local"
                        id="departureTime"
                        name="departureTime"
                        value={formData.departureTime}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="arrivalTime">Arrival Time</label>
                    <input
                        type="datetime-local"
                        id="arrivalTime"
                        name="arrivalTime"
                        value={formData.arrivalTime}
                        onChange={handleChange}
                    />
                </div>
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
