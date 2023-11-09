import { useState } from "react";
import logo from "../images/logo.png";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Email_pattern=/[a-z0-9]+@[a-z0-9.-]+\.[a-z]{3,}$/;

    const handleSubmit = (e) => {
        e.preventDefault();
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
                            type="text" 
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