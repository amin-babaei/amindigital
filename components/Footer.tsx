import {BsGithub, BsInstagram, BsFacebook, BsTwitter, BsTelephone} from "react-icons/bs";
import {GoLocation} from "react-icons/go";
import {MdEmail} from "react-icons/md";
import {FaHeadset} from 'react-icons/fa'
import Image from "next/image";
import {Col, Container, Row} from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="text-white text-center text-lg-start bg-primary">
            <Container>
                <Row className="pt-2">
                    <Col lg={4} sm={12} className="my-5 display-1 lh-lg d-flex flex-column align-items-center d-lg-block text-center text-lg-end">
                        <h5 className="mb-4">درباره ما</h5>
                        <p className='w-75'>
                            فروشگاه امین دیجیتال اولین فروشگاه تخصصی فروش لوازم کامپیوتر در ایران می باشد
                        </p>
                        <p className='w-75'>
                            مجموعه ما همواره بر سهولت خرید کالا برای مشتری تلاش کرده و باعث خوشنودی ماست که مارا انتخاب
                            می کنید
                        </p>
                    </Col>
                    <Col lg={4} md={6} className="my-5 display-1">
                        <h5 className="text-center mb-4">ساعات کاری</h5>
                        <table className="table text-center text-white">
                            <tbody className="font-weight-normal">
                            <tr>
                                <td>شنبه - دو شنبه :</td>
                                <td>8 صبح - 9 شب</td>
                            </tr>
                            <tr>
                                <td>سه شنبه - پنجشنبه :</td>
                                <td>8 صبح - 9 شب</td>
                            </tr>
                            <tr>
                                <td>جمعه :</td>
                                <td>8 صبح - 9 شب</td>
                            </tr>
                            </tbody>
                        </table>
                    </Col>

                    <Col lg={4} md={6} className="my-5 display-1">
                        <h5 className="mb-4 pb-1">فروشگاه امین دیجیتال</h5>
                        <ul className="list-unstyled p-0">
                            <li className="mb-4">
                                <span className="ms-2">خراسان رضوی ، مشهد ، پاساژ تک</span>
                                <GoLocation/>
                            </li>
                            <li className="mb-4">
                                <span className="ms-2">aminbabaei_dev@yahoo.com</span>
                                <MdEmail/>
                            </li>
                            <li className="mb-4">
                                <span className="ms-2">09935679611</span>
                                <BsTelephone/>
                            </li>
                            <li className="mb-3">
                                <span className="ms-2">09935679611</span>
                                <FaHeadset/>
                            </li>
                        </ul>
                    </Col>
                    <div className="w-100 d-flex justify-content-center mt-1">
                        <a type="button" className="btn btn-floating btn-primary btn-lg">
                            <BsGithub/>
                        </a>
                        <a type="button" className="btn btn-floating btn-primary btn-lg">
                            <BsInstagram/>
                        </a>
                        <a type="button" className="btn btn-floating btn-primary btn-lg">
                            <BsFacebook/>
                        </a>
                        <a type="button" className="btn btn-floating btn-primary btn-lg">
                            <BsTwitter/>
                        </a>
                    </div>
                </Row>
                <hr/>
                <div className='w-100 d-flex justify-content-center mb-4'>
                    <Image src='/images/namad.png' width={100} height={100} alt='نماد الکترونیکی'/>
                    <Image src='/images/sabt.png' width={100} height={100} alt='نماد ثبت'/>
                </div>
            </Container>
            <div className="Copyright text-center small p-3 bg-dark">
                کلیه حقوق این وب‌سایت متعلق به فروشگاه امین دیجیتال است  <a className='text-white' href='https://github.com/amin-babaei'>Copyright</a> {new Date().getFullYear()} - All rights reserved ©
            </div>
        </footer>
    );
}

export default Footer;