import { useState } from "react";
import logo from "../images/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeat_password, setRepeat_password] = useState("");
    const Email_pattern=/[a-z0-9]+@[a-z0-9.-]+\.[a-z]{3,}$/;

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(name == "" || email == "" || password == "" || repeat_password == "") {
            alert("Please make sure you have field all the required fields");
            return;
        }
        else if (!Email_pattern.test(email)) {
            alert("Please enter a valid email");
            return;
        }
        else if(password.length < 6) {
            alert(" Password must be at least 6 characters");
            return;
        }
        else if(password !== repeat_password) {
            alert('Please make sure to repeat the same password');
            return;
        } 
        
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        try {
            axios.post("http://localhost:8000/api/v0.0.1/register", formData)
            .then(response => {
                navigate("/login");
            })
            .catch(error => {
                console.log("axios error: " + error);
            })
        } catch (error) {
            console.log('catch error: ' + error);
        }
    }

    return ( 
        <div className="lgn_container">
            <div className="box_container">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <h1>Create an account</h1>
                <form onSubmit={handleSubmit} className="form_text">
                    <div className="input_container">
                        <input
                            type="text" 
                            id="name"
                            className="input"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
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
                    <div className="input_container">
                        <input 
                            type="password" 
                            id="rePassword"
                            className="input"
                            placeholder="Retype your password"
                            value={repeat_password}
                            onChange={(e) => setRepeat_password(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn_container " id="btn-container">Register</button>
                    <div className="register_link ">
                         <a href="/login">Already have an account?</a>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default RegisterPage;