import { styled } from "styled-components";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h1`
  margin: 20px;
`;
const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 20px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sortPrice, setSortPrice] = useState("price_asc");
  const [sortCE, setSortCE] = useState("ce_asc");
  const [sortBD, setSortBD] = useState("bd_asc");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Title>{cat}</Title>
      <FilterContainer>
        {/* <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="carbon_footprint_score" onChange={handleFilters}>
            <Option disabled>Carbon Footprint Score</Option>
            <Option>Best</Option>
            <Option>Good</Option>
            <Option>Average</Option>
          </Select>
          <Select name="biodegradable_score " onChange={handleFilters}>
            <Option disabled>Is Biodegradable?</Option>
            <Option>Highly Biodegradable</Option>
            <Option>Biodegradable</Option>
            <Option>Semi-Biodegradable</Option>
            <Option>Non-Biodegradable</Option>
          </Select>
        </Filter> */}
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSortPrice(e.target.value)}>
            <Option value="price_asc">Price (asc)</Option>
            <Option value="price_desc">Price (desc)</Option>
          </Select>
          <Select onChange={(e) => setSortCE(e.target.value)}>
            <Option value="ce_asc">CarbonEmissiom Score (asc)</Option>
            <Option value="ce_desc">CarbonEmissiom Score (desc)</Option>
          </Select>
          <Select onChange={(e) => setSortBD(e.target.value)}>
            <Option value="bd_asc">Biodegradibility Score (asc)</Option>
            <Option value="bd_desc">Biodegradibility Score (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sortPrice={sortPrice} sortCE={sortCE} sortBD={sortBD}/>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
