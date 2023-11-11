import { useState } from "react";
import DropDown from "../dropdown";
import NavBar from "../nav_bar";

const MultiChoice = (props) => {

    const [clicked, setClicked] = useState('Economy');
    
    const handleClick = (item) => {
        console.log("Clicked in MultiChoice:", item);
        
        if (props.handleClick) {
            props.handleClick(item);
        }
    };
    
    return ( 
        <div className="multi-choice">
            <div>
                <NavBar item1={props.item1} item2={props.item2} item3={props.item3} handleClick={handleClick}/>
            </div>
            <div >
                <DropDown  item1={'Economy'} item2={'Business class'} item3={'First class'} clicked={clicked}/>
            </div> 
        </div>  
     );
}
 
export default MultiChoice;