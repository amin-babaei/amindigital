"use client"
import { useState } from 'react'
import { Row, Container, Col, Alert, Button, Modal, Table } from 'react-bootstrap';
import Link from 'next/link';
import { BsCart3 } from 'react-icons/bs'
import Image from 'next/image';
import { SliderModal } from '../../../components/products';
import { addToCart } from '../../../store/basketSlice';
import { useDispatch } from 'react-redux';
import StarRatings from 'react-star-ratings';

interface IProduct {
  product: Product;
}

const DetailProduct = ({ product }: IProduct) => {
  const [show, setShow] = useState<boolean>(false);
  const [selectImgId, setSelectImgId] = useState<number>(0);

  const handleClose = (): void => setShow(false);
  const handleShow = (id:number): void => {
    setShow(true)
    setSelectImgId(id)
  }
  const dispatch = useDispatch();

  const addItemToBasket = (): void => {
    dispatch(addToCart(product));

  };

  return (
    <section>
      <Container>
        <ul className='d-flex align-items-center px-0 py-2 mt-3 mb-5 bg-light'>
          <Link href="/">
            <h6 className='mx-2 my-0 small cursor-pointer'>صفحه اصلی</h6>
          </Link>
          {">"}
          <Link href="/products">
            <p className='mx-2 my-0 small cursor-pointer'>محصولات</p>
          </Link>
          {">"}
          <p className='mx-2 my-0 small'>{product.title}</p>
        </ul>
        <Row>
          <Col lg={4} sm={12} className='mb-5'>
            <div className='w-100 d-flex justify-content-center align-items-center position-relative border' style={{ height: "300px" }}>
              <Image unoptimized loader={() => `${process.env.BASE_URL}/${product.images[0]}`} width={250} height={200} src={`${process.env.BASE_URL}/${product.images[0]}`} alt={product.title} />
            </div>
            <div className='w-100 d-flex align-items-center position-relative justify-content-end' dir='ltr'>
              {product.images.slice().reverse().map((image, index) => (
                <Image unoptimized className='border px-2 cursor-pointer' key={index} loader={() => `${process.env.BASE_URL}/${image}`} width={80} height={80} src={`${process.env.BASE_URL}/${image}`} alt={product.title} onClick={() => handleShow(index)}/>
              ))}
            </div>
            <Modal size='lg' show={show} onHide={handleClose} centered>
              <Modal.Body className='h-100'>
                <SliderModal images={product.images} select={selectImgId}/>
              </Modal.Body>
            </Modal>
          </Col>
          <Col lg={8} sm={12} className='mb-3'>
            <h1 className='display-2'>{product.title}</h1>
            <p className='small text-secondary'>{product.info}</p>
            <StarRatings
              rating={product.rating}
              starRatedColor="#ffe234"
              numberOfStars={5}
              starDimension="18px"
              starSpacing="1px"
            />
            <div className='d-flex justify-content-between mt-5'>
              <div className='d-none d-md-block w-50'>
                <ul className='pe-0 pe-sm-3'>
                  {product.specs.slice(0, 4).map((item, index) => (
                    <li key={index} className='py-3 small'>{item.title} : {item.description}</li>
                  ))}
                </ul>
              </div>
              <div className='w-100 w-md-50'>
                <p className='small text-secondary'>کد کالا : {product._id.slice(-10)}</p>
                <p className='small text-secondary'>موجودی محصول :
                  <span className='text-success font-weight-bold' style={{ fontWeight: '700' }}> موجود </span>
                </p>
                <hr />
                <Alert variant='dark'>
                  <p className='display-1 m-0'>
                    گارانتی 36 ماهه آواژنگ
                  </p>
                </Alert>
                {product.discountPrice > 0 ? (
                  <>
                    <del className='small'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'IRR' }).format(product.discountPrice).replace("IRR", "تومان")}</del>
                    <br />
                    <h5 style={{ fontWeight: '700' }} className='text-success'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'IRR' }).format(product.totalPrice).replace("IRR", "تومان")}</h5>
                  </>
                ) : <h5 style={{ fontWeight: '700' }} className='text-success'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'IRR' }).format(product.totalPrice).replace("IRR", "تومان")}</h5>
                }
                <Button variant="success" className='w-100 mt-4 d-flex justify-content-between align-items-center' onClick={addItemToBasket}>
                  <p className='m-0 py-3 display-1'>افزودن به سبد خرید</p>
                  <BsCart3 size={25} />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <header className="d-flex align-items-center justify-content-between mt-5 mb-4">
          <h5 className='display-2 m-0' style={{ fontWeight: 'bold' }}>مشخصات فنی</h5>
          <hr className="d-block w-75" />
        </header>
        <Table className='mb-5'>
          <thead>
            {product.specs.map((item, index) => (
              <tr key={index} className='p-tr'>
                <th className='py-3 display-1'>{item.title}</th>
                <th className='py-3 w-sm-25 w-lg-75 small'>{item.description}</th>
              </tr>
            ))}
          </thead>
        </Table>
      </Container>
    </section>
  )
}

export default DetailProduct 