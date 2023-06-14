"use client"
import {Card, Col, Container, Row} from "react-bootstrap";
import {FaHeadset} from 'react-icons/fa'
import {AiOutlineSafetyCertificate} from 'react-icons/ai'
import {MdOutlinePayment} from 'react-icons/md'
import {TbTruckDelivery} from 'react-icons/tb'
const Services = () => {
    return (
        <section className='py-5'>
            <Container>
                <Row className='gy-4'>
                    <Col xs={12} sm={6} lg={3}>
                        <Card className='h-100'>
                            <Card.Body className='d-flex flex-column align-items-center'>
                                <div className='bg-light d-flex align-items-center justify-content-center p-3 rounded-circle'>
                                    <FaHeadset className='text-block display-2' style={{fontSize:'30px'}}/>
                                </div>
                                <h6 className='my-4 display-1'>پشتیبانی 24/7</h6>
                                <p className='small text-muted text-center'>ما به شما پشتیبانی تمام وقت به صورت شبانه روزی ارائه می دهیم</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <Card className='h-100'>
                            <Card.Body className='d-flex flex-column align-items-center'>
                                <div className='bg-light d-flex align-items-center justify-content-center p-3 rounded-circle'>
                                    <AiOutlineSafetyCertificate className='text-block display-2' style={{fontSize:'30px'}}/>
                                </div>
                                <h6 className='my-4 display-1'>ضمانت کالا</h6>
                                <p className='small text-muted text-center'>ما به شما ضمانت کالا ارائه می دهیم</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <Card className='h-100'>
                            <Card.Body className='d-flex flex-column align-items-center'>
                                <div className='bg-light d-flex align-items-center justify-content-center p-3 rounded-circle'>
                                    <MdOutlinePayment className='text-block display-2' style={{fontSize:'30px'}}/>
                                </div>
                                <h6 className='my-4 display-1'>پرداخت ایمن</h6>
                                <p className='small text-muted text-center'>می توانید با خیال راحت پول محصول را پرداخت کنید</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <Card className='h-100'>
                            <Card.Body className='d-flex flex-column align-items-center'>
                                <div className='bg-light d-flex align-items-center justify-content-center p-3 rounded-circle'>
                                    <TbTruckDelivery className='text-block display-2' style={{fontSize:'30px'}}/>
                                </div>
                                <h6 className='my-4 display-1'>ارسال به سراسر ایران</h6>
                                <p className='small text-muted text-center'>فرقی نمیکنه کجا باشی ! ما برایت میاوریم</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Services;
