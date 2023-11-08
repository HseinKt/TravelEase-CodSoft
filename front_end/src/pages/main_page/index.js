import Header from "../../components/header";
import NavBar from "../../components/nav_bar";
import Flights from "../flights";

const MainPage = () => {
    return ( 
        <>
            <Header />
            <NavBar item1={'FLIGHTS'} item2={'HOTELS'} item3={'CAR-HIRE'}/>
            <Flights />
        </>
     );
}
 
export default MainPage;