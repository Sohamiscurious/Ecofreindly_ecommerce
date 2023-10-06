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
  text-align: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
  @media (max-width: 1000px) {
     /* Change the height property to 'auto' on smaller screens */
    flex-basis: calc(30% - 10px); /* Example: Two columns on screens <= 768px */
    /* You can adjust the flex-basis value to control the number of columns */
  @media (max-width: 800px) {
     /* Change the height property to 'auto' on smaller screens */
    flex-basis: calc(80% - 10px); /* Example: Two columns on screens <= 768px */
    /* You can adjust the flex-basis value to control the number of columns */

    }
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
  width: 100%;
  height: 100%; /* Ensure the image fits the container */
  z-index: 2;
  //box-sizing: border-box;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
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

const ProductInfo = styled.div`
  color: white; /* Set text color to white */
`;

const ProductTitle = styled.h3`
  color: white; /* Set text color to white */
`;

const Product = ({ item }) => {
  return (
    <Container>
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
