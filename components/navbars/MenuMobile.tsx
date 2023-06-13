"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { Button, Navbar, Offcanvas } from "react-bootstrap";
import { AiOutlineHome } from 'react-icons/ai'
import { BsFillGridFill } from 'react-icons/bs'
import { FaHeadset } from 'react-icons/fa'

const MenuMobile = () => {
    const [categoris] = useState<IcategoryItem[]>([
        { name: 'کارت گرافیک', slug: 'graphic-card' },
        { name: 'پردازنده', slug: 'cpu' },
        { name: 'مادربرد', slug: 'mainboard' },
        { name: 'پاور', slug: 'power' },
        { name: 'حافظه رم', slug: 'ram' },
        { name: 'کیس کامپیوتر', slug: 'case' },
        { name: 'هارد دیسک', slug: 'hard' },
        { name: 'خنک کننده', slug: 'cooling' },
    ])
    const [show, setShow] = useState<boolean>(false);

    const handleClose = ():void => setShow(false);
    const handleShow = ():void => setShow(true);
    return (
        <Navbar bg='body' className="p-0 shadow-lg border-top d-lg-none" fixed="bottom" style={{ zIndex: '2' }}>
            <div className='d-flex w-100'>
                <Link href='/'>
                    <Button variant='light' className='d-flex flex-column justify-content-between align-items-center flex-grow-1'>
                        <AiOutlineHome className='mb-1' />
                        <p className="display-1 m-0">خانه</p>
                    </Button>
                </Link>
                <Button variant='light' className='d-flex flex-column justify-content-between align-items-center flex-grow-1'
                    onClick={handleShow}>
                    <BsFillGridFill className='mb-1' />
                    <p className="display-1 m-0">دسته بندی</p>
                </Button>
                <Link href='/questions'>
                    <Button variant='light' className='d-flex flex-column justify-content-between align-items-center flex-grow-1'>
                        <FaHeadset className='mb-1' />
                        <p className="display-1 m-0">پشتیبانی</p>
                    </Button>
                </Link>
            </div>
            <Offcanvas show={show} onHide={handleClose} placement='bottom' className='h-auto rounded-top'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>دسته بندی ها</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='d-flex overflow-auto'>
                        {categoris.map(item => (
                            <Link key={item.slug} href={`/products?category=${item.slug}`}>
                                <Button variant='light' className='mx-4 text-nowrap'>{item.name}</Button>
                            </Link>
                        ))}
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </Navbar>
    );
}

export default MenuMobile;