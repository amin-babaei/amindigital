import queryString from 'query-string'
import ProductsList from '../../components/products/ProductsList';

type Props = {
  searchParams?: {
    search?: string;
  };
};

export const metadata = {
  title: 'محصولات',
}

const getProducts = async (searchParams: Props) => {
  const response = await fetch(`${process.env.BASE_URL}/api/products?${queryString.stringify(searchParams)}`, { cache: 'no-store' });
  const products = await response.json()
  return products;
};
const Page = async ({ searchParams }: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const data = await getProducts(searchParams)
  const total = data.totalProducts
  const perPage = data.perPage

  return (
    <>
      <ProductsList products={data.data} total={total} perPage={perPage} />
    </>
  )
}

export default Page