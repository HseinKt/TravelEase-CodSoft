import Header from "../../components/header";
import NavBar from "../../components/nav_bar";
import CarHire from "../car_hire";
import Flights from "../flights";
import Hotels from "../hotels";

const MainPage = () => {
    return ( 
        <>
            <Header />
            <NavBar item1={'FLIGHTS'} item2={'HOTELS'} item3={'CAR-HIRE'}/>
            {/* <Hotels /> */}
            <CarHire />
        </>
     );
}
 
export default MainPage;