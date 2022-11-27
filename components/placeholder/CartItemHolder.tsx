import ContentLoader from "react-content-loader";

const CartItemHolder = () => {
    return ( 
        <ContentLoader
                    speed={2}
                    viewBox="0 0 400 100"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="36" y="1" rx="2" ry="2" width="75" height="100" />
                    <rect x="121" y="1" rx="2" ry="2" width="75" height="100" />
                    <rect x="205" y="1" rx="2" ry="2" width="75" height="100" />
                    <rect x="289" y="1" rx="2" ry="2" width="75" height="100" />
 
                </ContentLoader>
     );
}
 
export default CartItemHolder;