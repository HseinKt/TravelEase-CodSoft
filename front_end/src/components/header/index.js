import { useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'

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
            <div className='menu_signin'>
                <div className="menu_travel">
                    More travel
                </div>
                <div className="sign_in" onClick={() => navigate("/login")}>
                    Sign In
                </div>
            </div>
        </div>
     );
}
 
export default Header;