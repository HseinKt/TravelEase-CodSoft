import { useState } from "react";
import logo from "../images/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Email_pattern=/[a-z0-9]+@[a-z0-9.-]+\.[a-z]{3,}$/;

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(email == "" || password == "") {
            alert("Please make sure you have field all the required fields");
            return;
        }
        else if(!Email_pattern.test(email)) {
            alert("Please enter a valid email");
            return;
        }
        else if(password.length < 6) {
            alert(" Password must be at least 6 characters");
            return;
        }

        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        try {
            axios.post("http://localhost:8000/api/v0.0.1/login", formData)
            .then(response => {
                console.log(response.data.authorization.token);
                navigate("/");
            })
            .catch(error => {
                console.log("axios error: " + error);
            })
        } catch (error) {
            console.log("catch error: " + error);
        }
    }

    return ( 
        <div className="lgn_container">
            <div className="box_container">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit} className="form_text">
                    <div className="input_container">
                        <input 
                            type="text" 
                            id="email"
                            className="input"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input_container">
                        <input 
                            type="password"  
                            id="password"
                            className="input"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn_container btn_push" id="btn-container">Sign In</button>
                    <div className="register_link ">
                         <a href="/register">Not registered? Register as a new User</a>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default LoginPage;