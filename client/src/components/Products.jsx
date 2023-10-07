import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sortPrice, sortBD, sortCE }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products/${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) { }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    if (cat) {
      setFilteredProducts(
        products.filter((item) => {
          // const carbonFilter = filters.carbon_footprint_score;
          // const biodegradableFilter = filters.biodegradable_score;

          // // Carbon Footprint Score filtering
          // if (
          //   (carbonFilter === "Average" && item.carbon_footprint_score < 40) ||
          //   (carbonFilter === "Good" && item.carbon_footprint_score < 60) ||
          //   (carbonFilter === "Best" && item.carbon_footprint_score < 90)
          // ) {
          //   return true;
          // }

          // // Biodegradable Score filtering
          // if (
          //   (biodegradableFilter === "Highly Biodegradable" && item.biodegradable_score < 40) ||
          //   (biodegradableFilter === "Semi-Biodegradable" && item.biodegradable_score < 60) ||
          //   (biodegradableFilter === "Biodegradable" && item.biodegradable_score < 60) ||
          //   (biodegradableFilter === "Highly Biodegradable" && item.biodegradable_score < 90)
          // ) {
          //   return true;
          // }

          // // If no filters match, exclude the item
          // return false;
          return true;
        })
      );
    }
  }, [products, cat, filters]);


  useEffect(() => {
    if (sortPrice === "price_asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (sortPrice === "price_desc"){
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sortPrice, sortCE, sortBD]);

  useEffect(() => {
    if (sortCE === "ce_asc"){
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.carbon_footprint_score - b.carbon_footprint_score)
      );
    }
    else if (sortCE === "ce_desc"){
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) =>  b.carbon_footprint_score- a.carbon_footprint_score)
      );
    }
  }, [sortPrice, sortCE, sortBD]);

  useEffect(() => {
    if (sortBD === "bd_asc"){
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.biodegradable_score - b.biodegradable_score)
      );
    }
    else if (sortBD === "bd_desc"){
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) =>  b.biodegradable_score- a.biodegradable_score)
      );
    }
  }, [sortBD]);

  return (
    <Container id="target">
      {cat
        ? filteredProducts.map((item) => <>
          <Product item={item} key={item.id} >
          </Product>
        </>)
        : products
          .slice(0, 8)
          .map((item) => (
            <>
              <Product item={item} key={item.id} >
              </Product>
            </>))}
    </Container>
  );
};

export default Products;