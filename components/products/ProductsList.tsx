"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Col, Container, Row } from 'react-bootstrap';
import { useCallback, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Sortbar, ProductItem } from '.';
import Image from 'next/image';

interface IProduct {
    products: Product[];
    total: number;
    perPage: number
}

const ProductsList = ({ products, total, perPage }: IProduct) => {
    const [currentPage] = useState<number>(1);
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [pageParams] = useState(searchParams.get("page")||"1");

    const createQueryString = useCallback(
        (name: string, value: string) => {
          const params = new URLSearchParams(searchParams)
          params.set(name, value)
     
          return params.toString()
        },
        [searchParams]
      )

    const pageCount = Math.ceil(total / perPage)
    const pagginationHandler = (page: any) => {
        let currentQuery = pageParams;
        currentQuery = page.selected + 1;
        router.push(pathname + "?" + createQueryString("page", currentQuery));
    };
    return (
        <section>
            <Container>
                {products?.length === 0 ? <div className='d-flex align-items-center justify-content-center' style={{ minHeight: '75vh' }}>
                    <Image src='/images/no-product.png' width={300} height={300} alt='no product' />
                </div> : (
                    <>
                        <Sortbar />
                        <Row className="mt-4">
                            {products.map(product => (
                                <Col lg={4} sm={12} key={product._id} className='mb-3'>
                                    <ProductItem product={product} />
                                </Col>
                            ))}
                        </Row>
                    </>
                )}
                 {products?.length > 0 && pageCount > 1 && (
                    <ReactPaginate
                        previousLabel={'<<'}
                        nextLabel={'>>'}
                        breakLabel={'...'}
                        activeClassName={'bg-primary text-white'}
                        containerClassName={'pagination'}
                        initialPage={currentPage - 1}
                        pageCount={pageCount}
                        marginPagesDisplayed={0}
                        pageRangeDisplayed={3}
                        onPageChange={pagginationHandler}
                    />
                 )}
            </Container>
        </section>
    )
}

export default ProductsList