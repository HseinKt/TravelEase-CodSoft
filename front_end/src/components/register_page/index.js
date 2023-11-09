import { useState } from "react";
import logo from "../images/logo.png";

const RegisterPage = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeat_password, setRepeat_password] = useState("");
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
                            type="text" 
                            id="password"
                            className="input"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="input_container">
                        <input 
                            type="text" 
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