import Information from './navbars/Information';
import TopNavbar from "./navbars/TopNavbar";
import MainNavbar from "./navbars/MainNavbar";

const Header = () => {
    return (
       <>
        <Information/>
          <TopNavbar />
         <MainNavbar/>
       </>
    );
}

export default Header;