import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.5s ease;
  cursor: pointer;
`;


const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  
  position: relative;


  &:hover ${Info} {
    opacity: 1;
  }
  
  @media (max-width: 1800px) {
    flex-basis: calc(30% - 40px); /* Example: Three columns on screens <= 1800px */
  }

  @media (max-width: 800px) {
    flex-basis: calc(50% - 20px); /* Example: Two columns on screens <= 800px */
  }

  @media (max-width: 480px) {
    flex-basis: calc(100% - 10px); /* Single column on screens <= 480px */
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
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

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const ProductInfo = styled.div`
  color: white; /* Set text color to white */
`;

const ProductTitle = styled.h3`
  color: white; /* Set text color to white */
`;

const Product = ({ item }) => {
  const getBackgroundColor = (score) => {
    if (score > 90) {
      return '#d4af3766';
    } else if (score > 60) {
      return '#D3D3D3';
    } else if (score > 40) {
      return '#b8ae99';
    } else {
      return 'initial'; // Default background color if none of the conditions match
    }
  };
  const backgroundColor = getBackgroundColor(item.carbon_footprint_score)
  return (
    <Container style={{ backgroundColor }}>
      <Circle />
      <Image src={item.product_image} alt={item.product_name} />
      <Info>
        <IconContainer>
          <Icon>
            <Link to={`/product/${item._id}`}>
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </Icon>
          <Icon>
            <i className="fa-regular fa-heart"></i>
          </Icon>
        </IconContainer>
        <ProductInfo>
          <ProductTitle>{item.product_name}</ProductTitle>
          <p>Category: {item.category}</p>
          <p>Price: ${item.price}</p>
          <p>Biodegradable Score: {item.biodegradable_score}</p>
          <p>Carbon Footprint Score: {item.carbon_footprint_score}</p>
          
        </ProductInfo>
      </Info>
    </Container>
  );
};

export default Product;
