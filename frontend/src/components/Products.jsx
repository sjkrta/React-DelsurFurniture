import { CircularProgress } from "@material-ui/core";
import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap:2rem;
    border-radius: 10px;
    padding: 1.5rem;
`;

const Products = ({product}) => {
  return (
    <Container>
      {product===null?<center><CircularProgress/></center>:
      product.map((item) => (
        <Product item={item} key={item.id} />
      ))
}
    </Container>
  );
};

export default Products;
