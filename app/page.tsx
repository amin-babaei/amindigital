
import Slider from "../components/Slider";
import Services from "../components/Services";
import Brands from "../components/Brands";
import { Graphic, NewProduct } from "../components/products";

export const metadata = {
  title: 'فروشگاه امین دیجیتال',
}

const getNewProducts = async () => {
  const responseNew = await fetch(`${process.env.BASE_URL}/api/products?limit=5`, { cache: "force-cache" });
  const newProducts = await responseNew.json()
  return newProducts;
};
const getGraphicProducts = async () => {
  const responseGraphic = await fetch(`${process.env.BASE_URL}/api/products?category=graphic-card&limit=4`, { cache: "force-cache" });
  const graphicProducts = await responseGraphic.json()
  return graphicProducts;
};

const Home = async () => {
  const newProductPromise = getNewProducts();
  const graphicProductsPromise = getGraphicProducts();
  const [{ data: Nproducts }, { data: Gproducts }] = await Promise.all([
    newProductPromise,
    graphicProductsPromise,
  ]);
  return (
    <>
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