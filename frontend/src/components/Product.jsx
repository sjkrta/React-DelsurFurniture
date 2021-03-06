import { ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ratingStarGen } from "../ratingStarGen";

const Container = styled.div`
  display: grid;
  -webkit-box-shadow: 0px 0px 5px 5px rgba(185, 185, 185, 0.3);
  box-shadow: 0px 0px 5px 5px rgba(185, 185, 185, 0.3);
  padding: 1rem;
  border-radius: 10px;
  transition:all 0.2s ease;
  &:hover{
    transform: scale(1.02);
    -webkit-box-shadow: 0px 0px 5px 5px rgba(185, 185, 185, 0.7);
  box-shadow: 0px 0px 5px 5px rgba(185, 185, 185, 0.7);
  }
`;
const InfoContainer = styled.div`
  display: grid;
`;

const Title = styled.div`
  font-size: 1.1rem;
  color: purple;
  letter-spacing: 1px;
  text-transform: uppercase;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const Price = styled.div`
  color: black;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 1.1rem;
`;
const Ratings = styled.div`
  display: flex;
  align-items: center;
  padding: 0.3rem 0;
  color: orange;
`;

const RatingsCount = styled.div`
  color: black;
  margin-left: 10px;
  font-size: 1rem;
  color: purple;
`;
const ImgContainer = styled.div`
  height: 200px;
  width: 200px;
  display: flex;
  align-items: center;
  border-radius: 25px;
  margin: 0 auto;
  margin-bottom: 1rem;
  position: relative;
  overflow: hidden;
`;

const Circle = styled.div`
  width: 230px;
  height: 230px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Link to={"/product/" + item.id} style={{ flexGrow: 1 }}>
      <Container>
        <ImgContainer>
          <Image src={item.images[0].image} />
        </ImgContainer>
        <InfoContainer>
          <Title>{item.name}</Title>
          <Ratings>
            {ratingStarGen(item.rating)}{" "}
            <RatingsCount>( {item.numReviews} )</RatingsCount>
          </Ratings>
          <Price>$ {item.price}</Price>
        </InfoContainer>
      </Container>
    </Link>
  );
};

export default Product;
