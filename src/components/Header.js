import React, { useState } from "react";
// import Header from './Header';
import styled from "styled-components";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";
const Header = () => {
  const [burgerState, setBurgerState] = useState(false);
  // const cars = useSelector(selectCars);

  return (
    <Container>
      <a href='#'>
        <img src='/images/logo.svg' alt='' />
      </a>
      <Menu>
        {/* {cars &&
          cars.map((car, index) => (
            <a key={index} href='#'>
              {car}
            </a>
          ))} */}
        <a href='#'>Model S</a>
        <a href='#'>Model G</a>
        <a href='#'>Model 3</a>
        <a href='#'>Model X</a>
        <a href='#'>Model Y</a>
      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <CustomMenu onClick={() => setBurgerState(true)} />
      </RightMenu>
      <BurgerNav show={burgerState}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerState(false)} />
        </CloseWrapper>

        <li>
          <a href='#'>Existing Inventory</a>
        </li>
        <li>
          <a href='#'>Used Inventory</a>
        </li>
        <li>
          <a href='#'>Trade In</a>
        </li>
        <li>
          <a href='#'>CyberTruck </a>
        </li>
        <li>
          <a href='#'>Roadster</a>
        </li>
        <li>
          <a href='#'> Models</a>
        </li>
        <li>
          <a href='#'>Stylish Design</a>
        </li>
        <li>
          <a href='#'>Revolution</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
      min-height : 60px;
      position : fixed;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding 0 20px;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
      
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  z-index: 16;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;

  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
