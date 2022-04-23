import { Badge } from "@material-ui/core";
import { SearchRounded, ShoppingCartOutlined } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 0.5rem 2rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: max-content auto max-content;
  align-items: center;
  ${mobile({ padding: "1rem" })};
`;

const Left = styled.div``;

const Center = styled.div`
  ${mobile({ display: "none" })};
`;

const Right = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: end;
  justify-items: end;
  gap: 1rem;
  ${mobile({})}
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: auto max-content;
  border-radius: 10px;
  background-color: white;
  padding: 0 0.5rem;
`;

const Input = styled.input`
  border: none;
  background-color: white;
  padding-left: 0.5rem;
  font-size: 1.2rem;
  color: #3e3e3e;
  padding: 0.5rem;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  background-color: transparent;
  color: purple;

  &:hover {
    cursor: pointer;
  }
`;

const Logo = styled.h1`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  font-weight: bold;
  letter-spacing: 2px;
  gap: 0.2rem;
  background: linear-gradient(red, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${mobile({ fontSize: "24px" })}
`;

const MenuItem = styled.div`
  font-size: 1.1rem;
  cursor: pointer;
  color: purple;
  ${mobile({})}
`;

const LogoImage = styled.img`
  height: 35px;
`;

const Navbar = () => {
  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">
            <Logo>
              <LogoImage src="https://sjkrta.github.io/sjkrta/brand.png" />{" "}
              ELSUR.
            </Logo>
          </Link>
        </Left>
        <Center>
          <Form onSubmit={handleForm}>
            <Input type="text" id="search" />
            <Button type="submit">
              <SearchRounded />
            </Button>
          </Form>
        </Center>
        <Right>
          <Link to="/register">
            <MenuItem>Register</MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem>Sign In</MenuItem>
          </Link>
          <Link to="/cart/">
            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
