import Image from "next/image";
import { Container, Navbar, Spinner } from "react-bootstrap";
import SearchInput from "./SearchInput";
import dynamic from "next/dynamic";
const Drawer = dynamic(() => import('../cart/Drawer'), {
  ssr: false,
  loading: () => <Spinner animation="border" variant="primary" />
});

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
          <Drawer/>
        </div>
      </Container>
    </Navbar>
  );
};
export default TopNavbar;