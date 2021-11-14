import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

// Container styles for Navbar
const Container = styled.div`
  height: 60px;
`;

// Wapper styles... give each child element same size, padding and positioning
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// styling left container section of Navbar
const Left = styled.div`
  ${"" /*  */}
  flex: 1;
  display: flex;
  align-items: center;
`;

// give the span element 14px size and pointer
const Language = styled.span`
  font-size: 14;
  cursor: pointer;
`;

// given a border style and centering the elements inside
const SearchContainer = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  margin-left: 1.3rem;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

// give a length of flex 1 and centering the content
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

// given a font weight of bold
const Logo = styled.h1`
  font-weight: bold;
`;

//given a length of flex 1, and positioning the elements
const Right = styled.div`
  flex: 1;
  display: flex;
  algin-items: center;
  justify-content: flex-end;
`;

// position to the end, given a pointer cursor, a left margin and font size of 14 pixels
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "grey", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>WHRA</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN-IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
