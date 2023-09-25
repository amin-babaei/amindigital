"use client"
import { useState } from 'react';
import { Badge, Button, Offcanvas } from 'react-bootstrap';
import { BsCart3, BsFillBagFill } from 'react-icons/bs'
import { RiShoppingBag3Line } from 'react-icons/ri'
import { selectBasketItems } from '../../store/basketSlice';
import { useSelector } from 'react-redux';
import CheckoutForm from './CheckoutForm';
import CardItem from './CardItem';

const Drawer = () => {
    const [show, setShow] = useState<boolean>(false);
    const [isCheckout, setIsCheckout] = useState<boolean>(false);

    const handleClose = (): void => setShow(false);
    const handleShow = (): void => setShow(true);

    const items = useSelector(selectBasketItems);

    return (
        <>
            <Button variant="light" className="me-2 position-relative" onClick={handleShow}>
                <BsCart3 />
            </Button>
            <Badge pill bg="success" className='position-absolute'>{items.length > 0 && items.length}</Badge>
            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton className='border-bottom'>
                    <Offcanvas.Title>
                        <BsFillBagFill size={30} />
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className={`d-flex flex-column ${items.length === 0 && 'justify-content-center align-items-center'}`}>
                    {items.length === 0 ? (
                        <>
                            <RiShoppingBag3Line color='rgb(233, 69, 96)' size={60} />
                            <p className='mt-3'>سبد خرید شما خالی است</p>
                        </>
                    ) : (
                        !isCheckout ? items.map(item => (
                            <CardItem key={item._id} item={item} />
                        ))
                            : <CheckoutForm show={setShow} isCheckout={setIsCheckout} />
                    )}
                </Offcanvas.Body>
                {items.length > 0 && isCheckout ? (
                    <div className='w-50 me-auto'>
                        <Button onClick={() => setIsCheckout(false)} className='text-white w-100' variant='danger' style={{ borderRadius: '0', padding: '15px 0' }}>
                            انصراف
                        </Button>
                    </div>
                )
                    : items.length > 0 && <Button variant='primary' style={{ borderRadius: '0', padding: '15px 0' }} onClick={() => setIsCheckout(true)}>ادامه سفارش</Button>}
            </Offcanvas>
        </>
    );
}

export default Drawer