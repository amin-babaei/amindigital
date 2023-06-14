"use client"
import { Col, Container, Row, Carousel} from "react-bootstrap";
import Image from "next/image";

const Slider = () => {
    return (
        <section style={{minHeight:'60vh'}}>
            <Container>
                <Row className='justify-content-end'>
                    <Col xs={12} lg={8} xl={10}>
                        <Carousel dir="ltr" controls={false}>
                        <Carousel.Item>
                                <div className="my-3 w-auto position-relative overflow-hidden" style={{height:'395px'}}>
                                    <Image 
                                            fill
                                           src="/images/next-type.png"
                                           alt="First slide"
                                           priority
                                           
                                    />
                                </div>
                        </Carousel.Item>
                        <Carousel.Item>
                                <div className="my-3 w-auto position-relative overflow-hidden" style={{height:'395px'}}>
                                    <Image fill
                                           src="/images/rb.png"
                                           alt="second slide"
                                           priority
                                           
                                    />
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Slider;
