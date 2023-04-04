import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import queryString from 'query-string'
import {Sortbar,ProductItem} from '../../components/products';
import Image from 'next/image';
import Head from 'next/head';

interface IProduct {
    products: Product[];
    total: number;
    perPage: number
}

const Products = ({ products, total, perPage }: IProduct) => {
    const [currentPage] = useState<number>(1);
    const router = useRouter()

    const pageCount = Math.ceil(total / perPage)
    const pagginationHandler = (page: any) => {
        const currentPath = router.pathname;
        const currentQuery = router.query;
        currentQuery.page = page.selected + 1;

        router.push({
            pathname: currentPath,
            query: currentQuery,
        });
    };

    return (
        <section>
            <Head>
                <title>محصولات</title>
            </Head>
            <Container>
                {products?.length === 0 ? <div className='d-flex align-items-center justify-content-center' style={{ minHeight: '75vh' }}>
                    <Image src='/images/no-product.png' width={500} height={500} alt='no product' />
                </div> : (
                    <>
                        <Sortbar />
                        <Row className="mt-4">
                            {products?.map(product => (
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
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    try {
        const response = await fetch(`${process.env.BASE_URL}/api/products?${queryString.stringify(query)}`);
        const products = await response.json()

        return {
            props: {
                products: products.data,
                total: products.totalProducts,
                perPage: products.perPage
            },
        };
    } catch (error) {
        console.log(error);
        return {
            props: {},
        };
    }

};
export default Products