import { useState } from "react";
import { styled } from "styled-components";
import { sliderItems } from "../data";
import {mobile} from '../responsive'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display:"none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX( ${props=>props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 100vh;
`;

const Image = styled.img`
  height: 80%;
  padding: 50px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Description = styled.p`
  padding-right: 30px;
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  border-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if(direction==="left"){
        setSlideIndex(slideIndex>0? slideIndex-1: sliderItems.length-1)
    }
    if(direction==="right"){
        setSlideIndex(slideIndex<sliderItems.length-1 ? slideIndex+1: 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <i class="fa-solid fa-arrow-left fa-fade"></i>
      </Arrow>
      <Wrapper slideIndex={slideIndex} >
        {sliderItems.map((item) => (
          <Slide key={item.id} >
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>
                {item.desc}
              </Description>
              <Button>Shop Now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <i class="fa-solid fa-arrow-right fa-fade"></i>
      </Arrow>
    </Container>
  );
};

export default Slider;
