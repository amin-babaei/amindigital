import { Metadata } from 'next';
import DetailProduct from './DetailProduct';

export async function generateMetadata(
    { params }: { params: { slug: string } }
  ): Promise<Metadata> {
    const { slug } = params;
    const { product } = await getProduct(slug);
  
    return {
      title: product[0].title,
    }
  }

const getProducts = async () => {
    const data = await fetch(`${process.env.BASE_URL}/api/products`);
    const products = await data.json()
    return products;
};
export const dynamicParams = true
const getProduct = async (slug: string) => {
    const data = await fetch(`${process.env.BASE_URL}/api/products/${slug}`, { next: { revalidate: 10 } });
    const product = await data.json()
    return product;
};

const page = async ({ params }: { params: { slug: string } }) => {
    const { slug } = params;
    const { product } = await getProduct(slug);

    return (
        <DetailProduct product={product[0]} />
    )
}
export default page

export async function generateStaticParams() {
    const { data: products } = await getProducts();
    return products.map((product: { slug: string; }) => ({
        slug: product.slug,
    }));
}