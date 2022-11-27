import {Container, Navbar} from "react-bootstrap";
import { BsTelephone, BsEnvelope } from "react-icons/bs";

const Information = () => {
  return (
    <Navbar expand="xl" bg="primary" className="flex flex-wrap p-0">
      <Container>
        <Navbar.Text className="text-white d-flex align-items-center">
          09935679611
          <BsTelephone className="mx-2" />
        </Navbar.Text>
        <Navbar.Text className="text-white d-flex align-items-center">
          aminbabaei_dev@yahoo.com
          <BsEnvelope className="mx-2" />
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Information;
