import { useParams } from "react-router-dom";

export const ProductDetail = ({ id }) => {
  const { productId } = useParams();

  return (
    <>
      <h1>The products detail page</h1>
      <p>{productId}</p>
    </>
  );
};
