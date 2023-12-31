import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  font-weight: 800;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  font-weight: 1000;
  letter-spacing: 3px;
  color: black;
  background-color:white;
  &:hover{
    color: white;
  background-color:black;
  }
  
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.img} />
      <Info>
        {/* <Title>{item.title}</Title> */}
        <Button>SHOP NOW</Button>
      </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
