import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import Footer from "../components/Footer";
import { addProduct } from "../redux/cartRedux";
import { publicRequest } from "../requestMethods";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import NewsLetter from "../components/NewsLetter";
import { useParams } from "react-router-dom";

const Container = styled.div`
  background-image: url('https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/f2b29f171836573.6475a7f76eb19.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

const Wrapper = styled.div`
  
  margin: 0 auto;
  padding: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${mobile({ padding: "20px", flexDirection: "column" })}
  @media (max-width: 768px) {
    /* Add your CSS rules for screens smaller than 768px here */
    /* For example: */
    padding: 10px;
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  
  
`;

const Image = styled.img`
  background-size: cover;
  border: 1px solid #ddd;
  width: 40vw;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  width: 40vw;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 28px;
  margin-bottom: 10px;
`;

const Desc = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  color: #555;
`;

const Price = styled.span`
  font-weight: 600;
  font-size: 36px;
  color: teal;
  margin-bottom: 20px;
  display: block;
`;

const FilterContainer = styled.div`
  width: 100%;
  margin: 40px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  ${mobile({ justifyContent: "space-between" })}
`;

const FilterTitle = styled.span`
  font-size: 18px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin-right: 10px;
`;

const FilterColor = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 8px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 100%;
  /* margin-top: 40px;
  padding: 20px; */
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${mobile({ flexDirection: "column" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  
`;

const Amount = styled.span`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 8px;
  font-size: 18px;
`;
const Certifications = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 50px;
  flex-direction:column;
`;

const Certification = styled.div`
  background-color: #f2f2f2;
  border-radius: 5px;
  padding: 5px 10px;
  margin-right: 10px;
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 18px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
 
`;
const Score = styled.div`
  background-color: #f2f2f2;
  border-radius: 5px;
  padding: 5px 10px;
  margin-right: 10px;
  margin-bottom: 5px;
  font-weight: 300;
  flex-direction:column;
 
`;
const Score1 = styled.div`
  background-color: #f2f2f2;
  border-radius: 5px;
  padding: 5px 10px;
  margin-right: 10px;
  margin-bottom: 5px;
  font-weight: 300;
  flex-direction:column;
 
`;

const Button = styled.button`
  /* padding: 0 30px; */
  border: 2px solid teal;
  background-color: black;
  color: white;
  cursor: pointer;
  /* font-weight: 600; */
  font-size: 20px;

  &:hover {
    background-color: #f8f4f4;
    color: black;
  }
`;
const PopUp = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 20px;
  border-radius: 5px;
  z-index: 999;
`;

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [showPopup, setShowPopup] = useState(false); // State to manage the pop-up
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${id}`);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
    setShowPopup(true); // Show the pop-up when the button is clicked
    setTimeout(() => {
      setShowPopup(false); // Hide the pop-up after a delay (e.g., 2 seconds)
    }, 2000); // Adjust the delay duration as needed
  };

  return (
    <Container>
      {showPopup && <PopUp>Added to cart</PopUp>}
      <Wrapper>
        <ImgContainer>
          <Image src={product.product_image} alt={product.title} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.product_name}</Title>
          <Desc>{product.product_description}</Desc>
          <Price>$ {product.price}</Price>

          <FilterContainer>
            <Filter>
              <Score1>
              
              <Desc>Certification:</Desc>
              
              
              {product.certifications && product.certifications.map((certification, index) => (
                <Certification key={index}>{certification}</Certification>
              ))}

            
              </Score1>
            
            </Filter>
            <Filter>
              
              
            <Score>
            <Desc>Carbon Score</Desc>
            <Certification>{product.carbon_footprint_score} </Certification>
              
            </Score>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <i
                className="fa-solid fa-minus"
                onClick={() => handleQuantity("dec")}
              ></i>
              <Amount>{quantity}</Amount>
              <i
                className="fa-solid fa-plus"
                onClick={() => handleQuantity("inc")}
              ></i>
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
