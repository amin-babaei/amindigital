"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { useDebouncedCallback } from "use-debounce";

const SearchInput = () => {
    const [query, setQuery] = useState<string>('')
    const [searchCompleted, setSearchCompleted] = useState(false);
    const [loading, setLoading] = useState<boolean>(false)
    const [results, setResults] = useState<Product[]>([])

    const pathname = usePathname()
    const searchRef = useRef(null) as React.MutableRefObject<HTMLInputElement | null>

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setQuery(query);
    };

    const debouncedSearch = useDebouncedCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${process.env.BASE_URL}/api/products?search=${query}`);
            const data = await response.json();
            setResults(data.data);
            setLoading(false);
        } catch {
            setLoading(false);
        }
        setSearchCompleted(true);
    }, 400);

    useEffect(() => {
        setSearchCompleted(false);
        if (query.length === 0) {
            setResults([]);
        } else {
            debouncedSearch();
        }
    }, [query, debouncedSearch]);

    useEffect(() => {
        const onClick = (event: MouseEvent) => {
          if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
            setQuery('');
            setResults([]);
          }
        };
        window.addEventListener('click', onClick);
        return () => {
          window.removeEventListener('click', onClick);
        };
      }, [searchRef]);

    useEffect(() => {
        if (results.length > 0) {
            setResults([]);
            setQuery('')
        }
    }, [pathname])

    return (
        <InputGroup ref={searchRef} className="mb-2 w-md-50 order-1 mb-sm-0 order-sm-0" dir="ltr">
            <Button variant="primary" id="button-addon1">
                {loading ? (
                    <div className="spinner-border" style={{ width: '15px', height: "15px" }}></div>
                ) : <BsSearch />}
            </Button>
            <Form.Control
                placeholder='جستجو کنید'
                className='text-end small shadow-none position-relative'
                style={{ outline: 'none', padding: '8px 5px' }}
                onChange={handleChange}
                value={query}
            />
            {results.length > 0 && query.length > 0 && (
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
            {searchCompleted && results.length === 0 && query.length > 0 && (
                <ul className="bg-white shadow-sm rounded w-100 position-absolute top-100" style={{ zIndex: '10', height: '100px' }}>
                    <h3 className="mt-4 h6 text-center">محصولی یافت نشد</h3>
                </ul>
            )}
        </InputGroup>
    )
}
export default SearchInput