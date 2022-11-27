import Link from 'next/link';
import React from 'react';
import { Button, Container } from "react-bootstrap";
import { AiFillCaretLeft } from 'react-icons/ai'
import Slider from 'react-slick'
import CartItemHolder from '../placeholder/CartItemHolder';
import {ProductItem} from './index';

interface Iprops {
    product: Product[];
}
const NewProduct = ({ product }: Iprops) => {
    let settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: -1,
        autoplay: true,
        rtl: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    initialSlide: 2
                }
            }
        ]
    };

    return (
        <section className='py-5'>
            <Container>
                <header className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className='display-2 m-0'>جدیدترین محصولات</h5>
                    <hr className="d-none d-lg-block w-75" />
                    <Link href='/products'>
                        <Button variant='outline-primary' className='d-flex align-items-center'>

                            مشاهده همه
                            <AiFillCaretLeft className='me-1' />
                        </Button>
                    </Link>
                </header>
                {product ? (
                    <Slider {...settings}>
                    {product?.map(item => (
                        <ProductItem key={item._id} product={item} />
                    ))}
                </Slider>
                ) : (
                    <CartItemHolder />
                )}
            </Container>
        </section>
    );
}

export default NewProduct;