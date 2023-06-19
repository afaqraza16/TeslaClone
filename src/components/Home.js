import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = () => {
  return (
    <Container>
      <Section
        title='Model S'
        description=' Order Online For TouchLess Delivery'
        backgroundImg='model-s.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Delivery'
      />
      <Section
        title='Model Y'
        description=' Order Online For TouchLess Delivery'
        backgroundImg='model-y.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Delivery'
      />
      <Section
        title='Model 3'
        description=' Order Online For TouchLess Delivery'
        backgroundImg='model-3.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Delivery'
      />
      <Section
        title='Model X'
        description=' Order Online For TouchLess Delivery'
        backgroundImg='model-x.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Delivery'
      />
      <Section
        title='Lowest Cost Solar Panels In America'
        description=' Money-Back Guarantee '
        backgroundImg='solar-panel.jpg'
        leftBtnText='Order Now'
        rightBtnText='Learn More'
      />
      <Section
        title='Solar For New Roofs'
        description=' Solar Roof Costs is less then a new Roofs Plus Solar Panels '
        backgroundImg='solar-roof.jpg'
        leftBtnText='Order Now'
        rightBtnText='Learn More'
      />
      <Section
        title='Accessories'
        description=''
        backgroundImg='accessories.jpg'
        leftBtnText='Shop Now'
        rightBtnText=''
      />
    </Container>
  );
};

export default Home;

const Container = styled.div``;
