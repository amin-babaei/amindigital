import Head from 'next/head';
import React from 'react';
import { Accordion, Container } from "react-bootstrap";

const Questions = () => {
    return (
        <section className='my-5'>
            <Head>
                <title>سوالات متداول</title>
            </Head>
            <Container>
                <Accordion flush>
                    <Accordion.Item eventKey="0" className='my-4'>
                        <Accordion.Header>#1 آدرس فروشگاه کجاست ؟ </Accordion.Header>
                        <Accordion.Body className='display-1 py-4'>
                            خراسان رضوی ، مشهد ، پاساژ تک
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className='my-4'>
                        <Accordion.Header>#2 هزینه ارسال چقدر است ؟ </Accordion.Header>
                        <Accordion.Body className='display-1 py-4'>
                            هزینه ارسال مرسوله شما بستگی به وزن مرسوله و زمان ثبت سفارش متغیر است !
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className='my-4' id='support'>
                        <Accordion.Header>#7 چگونه با پشتیبانی تماس بگیرم ؟ </Accordion.Header>
                        <Accordion.Body className='display-1 py-4'>
                            برای تماس با پشتیبانی باید تلفن خود را برداشته و تماس حاصل فرمایید
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className='my-4'>
                        <Accordion.Header>#3 چطور میتوانم سفارشم را لغو کنم ؟ </Accordion.Header>
                        <Accordion.Body className='display-1 py-4'>
                            جهت لغو سفارش با پشتیبانی تماس بگیرید
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className='my-4'>
                        <Accordion.Header>#4 شرایط اقساط به چه شکل است ؟ </Accordion.Header>
                        <Accordion.Body className='display-1 py-4'>
                            ما اینجا اقساطی نمیدیم !
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5" className='my-4'>
                        <Accordion.Header>#5 چطوری سفارشمو پیگیری کنم ؟ </Accordion.Header>
                        <Accordion.Body className='display-1 py-4'>
                            شما به هیچ وجه نمیتوانید سفارشی را که ثبت کردید را پیگیری کنید
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6" className='my-4'>
                        <Accordion.Header>#6 ساعات کاری به چه شکل است ؟ </Accordion.Header>
                        <Accordion.Body className='display-1 py-4'>
                            ساعات کاری ما به شکل مربع است
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </section>
    )
}
    ;

export default Questions;