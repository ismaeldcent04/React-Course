import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const DUMMY_PRODUCTS = [
    {
      id: "p1",
      price: 6,
      title: "My First Book",
      description: "The first book a ever wrote.",
    },
    {
      id: "p2",
      price: 5,
      title: "My Second Book",
      description: "The second book a ever wrote.",
    },
  ];

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </ul>
    </section>
  );
};

export default Products;
