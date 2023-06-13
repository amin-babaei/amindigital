import Link from 'next/link';
import { Button, Col, Container, Row } from "react-bootstrap";
import { AiFillCaretLeft } from 'react-icons/ai'
import ProductItem from './ProductItem';

interface Iprops {
    product: Product[];
}
const GraphicProduct = ({ product }: Iprops) => {

    return (
        <section className='py-5'>
            <Container>
                <header className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className='display-2 m-0'>کارت گرافیک</h5>
                    <hr className="d-none d-lg-block w-75" />
                    <Link href='/products?category=graphic-card'>
                        <Button variant='outline-primary' className='d-flex align-items-center'>
                            مشاهده همه
                            <AiFillCaretLeft className='me-1' />
                        </Button>
                    </Link>
                </header>
                <Row>
                    {product?.map(item => (
                        <Col lg={3} md={6} sm={12} key={item._id} className='p-1 mb-1'>
                            <ProductItem product={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default GraphicProduct;