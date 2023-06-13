import {Container, Navbar} from "react-bootstrap";
import Link from "next/link";
import Category from "../category/category";

const MainNavbar = () => {
    return (
            <Navbar className="py-2 shadow-sm d-none d-lg-block">
                <Container>
                   <Category/>
                    <ul className='d-flex justify-content-end align-items-center list-unstyled p-0 m-0'>
                        <Link href='/'>
                            <li role="button" className="ms-4 display-1 cursor-pointer">صفحه اصلی</li>
                        </Link>
                        <Link href='/questions'>
                            <li role="button" className="me-4 display-1">سوالات متداول</li>
                        </Link>
                    </ul>
                </Container>
            </Navbar>
    );
};

export default MainNavbar;
