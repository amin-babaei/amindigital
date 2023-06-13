"use client"
import Image from "next/image";
import { Button, Container, Form, InputGroup, Navbar } from "react-bootstrap";
import DrawerCart from "./DrawerCart";
import { BsSearch } from 'react-icons/bs'
import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SearchProps {
  onFocusHandler: (status: boolean) => void
}
const TopNavbar = ({ onFocusHandler }: SearchProps) => {
  const [query, setQuery] = useState<string>('')
  const [active, setActive] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [results, setResults] = useState<Product[]>([])

  const pathname = usePathname()
  const searchRef = useRef(null) as React.MutableRefObject<HTMLInputElement | null>

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    onFocusHandler(true)
    const query = event.target.value
    setQuery(query)
    if (query.length) {
      setLoading(true)
      fetch(`${process.env.BASE_URL}/api/products?search=${query}`)
        .then((res) => res.json())
        .then((res) => {
          setResults(res.data)
          setLoading(false)
        })
    } else {
      setResults([])
      setLoading(false)
    }
  }, [])

  const onFocus = () => {
    setActive(true)
    window.addEventListener('click', onClick)
  }

  const onClick = useCallback((event: any) => {
    onFocusHandler(true)
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false)
      onFocusHandler(false)
      setQuery('')
      setResults([])
      window.removeEventListener('click', onClick)
    }
  }, [])

  useEffect(() => {
    if (results.length > 0) {
      setResults([]);
      setQuery('')
    }
  }, [pathname])

  return (
    <Navbar expand="xl" className="p-0 border-bottom border-light d-block" ref={searchRef}>
      <Container>
        <Navbar.Brand className='m-0'>
          <Image
            src="/images/amindigital.png"
            width={100}
            height={80}
            alt="logo"
          />
        </Navbar.Brand>
        <InputGroup className="mb-2 w-md-50 order-1 mb-sm-0 order-sm-0" dir="ltr">
          <Button variant="primary" id="button-addon1">
            {loading ? (
              <div className="spinner-border" style={{ width: '15px', height: "15px" }}></div>
            ) : <BsSearch />}
          </Button>
          {active && results.length > 0 && (
            <ul className="p-2 overflow-auto bg-white shadow-sm rounded w-100 list-unstyled position-absolute top-100" style={{ zIndex: '10', height: '150px' }}>
              {results.map(result => (
                <Link key={result._id} href={`/products/${result.slug}`}>
                  <li className='bg-light my-1 d-flex border rounded justify-content-between px-2 align-items-center cursor-pointer'>
                    <Image src={`${process.env.BASE_URL}/${result.images[0]}`} width={100} height={80} alt={result.title} />
                    <p className="m-0 small">{result.title}</p>
                  </li>
                </Link>
              ))}
            </ul>
          )}
          <Form.Control
            placeholder='جستجو کنید'
            className='text-end small shadow-none position-relative'
            style={{ outline: 'none', padding: '8px 5px' }}
            onChange={handleChange}
            value={query}
            onFocus={onFocus}
          />
        </InputGroup>
        <div className='d-flex'>
          <DrawerCart />
        </div>
      </Container>
    </Navbar>
  );
};
export default TopNavbar;