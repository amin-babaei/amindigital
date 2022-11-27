import React from 'react';
import { Button, Card } from "react-bootstrap";
import { BsPlusLg } from 'react-icons/bs'
import Image from "next/image";
import StarRatings from 'react-star-ratings';
import { useDispatch } from "react-redux";
import { addToCart } from '../../store/basketSlice';
import Link from 'next/link';

interface Iprops {
    product: Product;
}
const ProductItem = ({ product }: Iprops) => {

    const dispatch = useDispatch();

    const addItemToBasket = (): void => {
        dispatch(addToCart(product));

    };
    const src = `${process.env.BASE_URL}/${product.images[0]}`;
    return (
        <Card className='border-0 shadow-sm p-card d-flex align-items-stretch h-100'>
            <Link href={`/products/${product.slug}`}>
                <div className='w-100 d-flex justify-content-center align-items-center position-relative cursor-pointer' style={{ height: "270px" }}>
                    <Image unoptimized loader={() => src} width={220} height={180} placeholder='blur' blurDataURL={src} src={src} alt={product.title} />
                </div>
            </Link>
            <Card.Body dir='rtl' className='d-flex flex-column justify-content-around' style={{ height: '180px' }}>
                <Card.Title className='small'>
                    <Link href={`/products/${product.slug}`}>
                        {product.title}
                    </Link></Card.Title>
                <StarRatings
                    rating={product.rating}
                    starRatedColor="#ffe234"
                    numberOfStars={5}
                    starDimension="18px"
                    starSpacing="1px"
                />
                <div className='d-flex align-items-center justify-content-between'>
                    <div >
                        {product.discountPrice > 0 ? (
                            <>
                                <del className='small'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'IRR' }).format(product.discountPrice).replace("IRR", "تومان")}</del>
                                <br />
                                <span className='me-2 text-danger'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'IRR' }).format(product.totalPrice).replace("IRR", "تومان")}</span>
                            </>
                        ) : <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'IRR' }).format(product.totalPrice).replace("IRR", "تومان")}</span>
                        }
                    </div>
                    <Button variant='danger' size='sm' onClick={addItemToBasket}>
                        <BsPlusLg className='text-white' />
                    </Button>
                </div>
            </Card.Body>
        </Card>

    );
}

export default ProductItem;