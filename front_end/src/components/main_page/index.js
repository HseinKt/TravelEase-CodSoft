import Header from "../header";
import MultiChoice from "../multi_choice";
import NavBar from "../nav_bar";

const MainPage = () => {
    return ( 
        <>
            <Header />
            <NavBar item1={'FLIGHTS'} item2={'HOTELS'} item3={'CAR-HIRE'}/>
            <MultiChoice item1={'RoundTrip'} item2={'One-Way'} item3={'Multi-city'}/>
        </>
     );
}
 
export default MainPage;