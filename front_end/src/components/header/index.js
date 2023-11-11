import { useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'
import ClickMe from '../dropdown/click_me';

const Header = (props) => {
    const navigate = useNavigate();
    const handleChange = () => {
        navigate('/');
    }
    
    const handleClick = (item) => {
        console.log("Clicked in Header:", item);
        
        if (props.handleClick) {
            props.handleClick(item);
        }
    };
    return ( 
        <div className="header_container">
            <div className="logo">
                <img src={logo} alt="logo" onClick={handleChange}/>
            </div> 
            <div className='dropdown_signin'>

                <ClickMe item1={props.item1} item2={props.item2} item3={props.item3} clicked={'click me'} handleClick={handleClick}/>

                <div className="sign_in" onClick={() => navigate("/login")}>
                    Sign In
                </div>
            </div>
        </div>
     );
}
 
export default Header;