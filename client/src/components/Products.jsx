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

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
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
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
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