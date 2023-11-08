import { useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'
import DropDown from '../dropdown';

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

                <DropDown item1={'FLIGHTS'} item2={'HOTELS'} item3={'CAR-HIRE'}/>

                <div className="sign_in" onClick={() => navigate("/login")}>
                    Sign In
                </div>
            </div>
        </div>
     );
}
 
export default Header;