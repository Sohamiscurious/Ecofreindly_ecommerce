import { styled } from "styled-components";
import { mobile } from "../responsive";
import { useState} from "react";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url('./bg2.png');
  background-size: cover;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
  ${mobile({ fontSize: "36px" })}
`;

const Description = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 20px;
  color: #666;
  text-align: center;
`;

const InputContainer = styled.div`
  background-color: #fff;
  width: 50%;
  max-width: 400px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Added to create space between input and button */
  border: 1px solid #ccc;
  border-radius: 25px;
  overflow: hidden;
  margin-bottom: 20px; /* Added margin to create space between input and button */
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 0.7;
  padding-left: 20px;
  font-size: 16px;
  outline: none;
  color: #333;
`;

const Button = styled.button`
  flex: 0.3;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;

const NewsLetter = () => {
  const [Hola, setHola] = useState("")
  return (
    <Container>
      <Title>NEWSLETTER</Title>
      <Description>Get Timely Updates from Your Favorite Products</Description>
      <InputContainer>
        <Input placeholder="Your Email" type="email" value={Hola} onChange={(e) => setHola(e.target.value)}/>
        <Button onClick={()=>setHola("")} > 
          <i className="fas fa-paper-plane"></i> 
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
