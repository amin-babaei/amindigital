import Image from "next/image";
import { Container, Navbar } from "react-bootstrap";
import DrawerCart from "./DrawerCart";
import SearchInput from "./SearchInput";

const TopNavbar = () => {
  return (
    <Navbar expand="xl" className="p-0 border-bottom border-light d-block">
      <Container>
        <Navbar.Brand className='m-0'>
          <Image
            src="/images/amindigital.png"
            width={100}
            height={80}
            alt="logo"
          />
        </Navbar.Brand>
        <SearchInput/>
        <div className='d-flex'>
          <DrawerCart />
        </div>
      </Container>
    </Navbar>
  );
};
export default TopNavbar;