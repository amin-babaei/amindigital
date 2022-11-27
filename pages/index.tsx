import Slider from "../components/slider";
import Services from "../components/services";
import Brands from "../components/Brands";
import { GetStaticProps } from "next";
import {Graphic,NewProduct} from "../components/products";
import Head from "next/head";
interface IProduct {
  Gproducts: Product[];
  Nproducts: Product[];
}
const Home = ({ Gproducts, Nproducts }: IProduct) => {

  return (
    <>
      <Head>
        <title>فروشگاه امین دیجیتال</title>
      </Head>
      <Slider />
      <main>
        <NewProduct product={Nproducts} />
        <Graphic product={Gproducts} />
        <Services />
        <Brands />
      </main>
    </>
  )
}
export default Home
export const getStaticProps: GetStaticProps = async () => {
  try {
    const responseNew = await fetch(`${process.env.BASE_URL}/api/products?limit=5`);
    const newProducts = await responseNew.json()

    const responseGraphic = await fetch(`${process.env.BASE_URL}/api/products?category=graphic-card&limit=4`);
    const graphicProducts = await responseGraphic.json()

    return {
      props: {
        Gproducts: graphicProducts.data,
        Nproducts: newProducts.data
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }

};