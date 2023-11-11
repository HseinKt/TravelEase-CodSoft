import { useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'
import ClickMe from '../dropdown/click_me';

const Header = () => {
    const navigate = useNavigate();
    const handleChange = () => {
        navigate('/');
    }

    return ( 
        <div className="header_container">
            <div className="logo">
                <img src={logo} alt="logo" onClick={handleChange}/>
            </div> 
            <div className='dropdown_signin'>

                <ClickMe item1={'FLIGHTS'} item2={'HOTELS'} item3={'CAR-HIRE'} clicked={'click me'}/>

                <div className="sign_in" onClick={() => navigate("/login")}>
                    Sign In
                </div>
            </div>
        </div>
     );
}
 
export default Header;