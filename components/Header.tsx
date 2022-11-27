import React, { useState } from 'react';
import Information from './navbars/Information';

import TopNavbar from "./navbars/TopNavbar";
import MainNavbar from "./navbars/MainNavbar";

const Header = () => {
  const [searchActive, setSearchActive] = useState<boolean>(false)
  const checkSearchStatus = (status: boolean) => {
    if (status) {
      setSearchActive(true)
    } else {
      setSearchActive(false)
    }
  }
    return (
       <>
        <Information/>
          <TopNavbar onFocusHandler={(status) => checkSearchStatus(status)}/>
         <MainNavbar/>
       </>
    );
}

export default Header;
