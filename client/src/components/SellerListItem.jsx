import styled from "styled-components";
import React from "react";
import { Router } from "react-router";
import { Link } from "react-router-dom";
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`
font-weight: 500;
font-size: 20px;
`;

const ProductId = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const EditButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  width: 30%;
  border: "none";
  background-color: "transparent";
  color: "white";
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const ProcuctDescription = styled.p`
  padding-right: 30px;
  margin: 50px 0px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 3px;
`;

export default function SellerListItem({ p_id, p_name, p_desc, p_img, p_price }) {
  return (
    <Product>
      <ProductDetail>
        <Image src={`https://source.unsplash.com/200x200/?${p_name}`} />
        <Details>
          <ProductName>
            Product: <b>{p_name}</b>
          </ProductName>
          <ProcuctDescription>
            {p_desc}
          </ProcuctDescription>
          <ProductId>
            <b>ID:</b> {p_id}
          </ProductId>
        </Details>
      </ProductDetail>
      <PriceDetail>
        <ProductPrice>$ {p_price}</ProductPrice>
        <EditButton >
          <a href={"/edit-product/" + p_id}>
            Edit Page
          </a>
        </EditButton>
      </PriceDetail>
    </Product>
  )
}
