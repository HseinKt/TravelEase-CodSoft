import Header from "../header";
import NavBar from "../nav_bar";

const MainPage = () => {
    return ( 
        <>
            <Header />
            <NavBar item1={'FLIGHTS'} item2={'HOTELS'} item3={'CAR-HIRE'}/>
        </>
     );
}
 
export default MainPage;