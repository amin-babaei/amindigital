import { useState,useEffect } from 'react';
import { Badge, Button, Card, Offcanvas } from 'react-bootstrap';
import { BsCart3, BsFillBagFill, BsPlusLg,BsFillTrashFill,BsDashLg } from 'react-icons/bs'
import { RiShoppingBag3Line } from 'react-icons/ri'
import Image from "next/image";
import { incrementQuantity,decrementQuantity,removeItem, selectBasketItems,paymentSuccess } from '../../store/basketSlice';
import { useDispatch, useSelector } from 'react-redux';
import toast from "react-hot-toast";
import Swal from 'sweetalert2';

const DrawerCart = () => {
    const [total, setTotal] = useState<number>(0);
    const [show, setShow] = useState<boolean>(false);
    const handleClose = () :void => setShow(false);
    const handleShow = () :void => setShow(true);

    const dispatch = useDispatch();
    const items = useSelector(selectBasketItems);

    useEffect(() => {
        const getTotal = () => {
            const result = items.reduce((prev, item) => {
                return prev + item.totalPrice * item.quantity;
            }, 0);
            setTotal(result);
        }
        getTotal()
    }, [items]);
      
    const removeItemFromBasket = (id:string,title:string) :void => {
        dispatch(removeItem({ id }));
        toast.error(`${title} از سبد خرید حذف شد`, {
          position: "top-center",
          icon: '😥',
        style: {
            background: 'red',
            color: '#fff',
          },
         });
    };
    const increment = (id:string) :void => {
        dispatch(incrementQuantity({ id }));
    };
    const decriment = (id:string) :void => {
        dispatch(decrementQuantity({ id }));
    };
    const handlePayment = () => {
        setShow(false)
        dispatch(paymentSuccess());
        Swal.fire({confirmButtonText: 'خروج',icon: 'success',
        title: 'خرید شما موفقیت آمیز بود',
        text: 'از اینکه مارا انتخاب کردید سپاس گذاریم',}
          )
      };
    return (
        <>     
            <Button variant="light" className="me-2 position-relative" onClick={handleShow}>
                <BsCart3 />
            </Button>
            <Badge pill bg="success" className='position-absolute'>{items.length > 0 && items.length}</Badge>
            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton className='border-bottom'>
                    <Offcanvas.Title>
                        <BsFillBagFill size={30}/>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className={`d-flex flex-column ${items.length === 0 && 'justify-content-center align-items-center'}`}>
                    {items.length === 0 ? (
                        <>
                            <RiShoppingBag3Line color='rgb(233, 69, 96)' size={60} />
                            <p className='mt-3'>سبد خرید شما خالی است</p>
                        </>
                    ) : (
                        items.map(item => (
                            <Card className='border-0 shadow-sm w-100 mb-3 position-relative' key={item._id}>
                                <Card.Body dir='rtl' className='d-flex justify-content-between align-items-center'>
                                    <Button variant='danger' size='sm' onClick={()=> removeItemFromBasket(item._id,item.title)}>
                                        <BsFillTrashFill className='text-white'/>
                                    </Button>
                                    <div className='w-25'>
                                        <h6 className='small' style={{fontSize:'12px'}}>{item.title}</h6>
                                    </div>
                                    <div className='w-25 h-100 mx-2 position-relative'>
                                        <Image unoptimized loader={() => `${process.env.BASE_URL}/${item.images[0]}`}
                                         layout='fill' src={`${process.env.BASE_URL}/${item.images[0]}`}
                                         alt={item.title} />
                                    </div>
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <Button variant='primary' size='sm' onClick={()=> increment(item._id)}>
                                            <BsPlusLg className='text-white'/>
                                        </Button>
                                        <p className='my-1'>{item.quantity}</p>
                                        <Button variant='danger' size='sm' onClick={()=> decriment(item._id)}
                                        disabled={item.quantity === 1}>
                                            <BsDashLg className='text-white' />
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        ))
                    )}
                </Offcanvas.Body>
                    {items.length > 0 && <Button variant='success' style={{borderRadius:'0',padding:'10px 0'}} onClick={() => handlePayment()}>
                        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'IRR' }).format(total).replace("IRR", "تومان")}
                    </Button> }
            </Offcanvas>
        </>
    );
}

export default DrawerCart