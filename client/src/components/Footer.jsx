import { styled } from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 60px;
  border-radius: 50%;

`;

const Description = styled.p`
    margin: 20px 5px;
`;

const SocialContainer= styled.div`
    display: flex;
`;

const SocialIcon= styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
    background-color: black;
    color: white;
    transition: all 0.5s ease;

    &:hover{
        transform: scale(1.1);
    }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display:"none"})}
`;

const Title = styled.h3`
    margin-bottom: 30px;

`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-content: center;
`;

const Payment = styled.div `

`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo src="bird.png"></Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          praesentium adipisci quos necessitatibus rerum hic maiores excepturi
          sapiente, delectus cumque esse vitae quis, asperiores quisquam vel
          facere tenetur ex! Necessitatibus.
        </Description>
        <SocialContainer>
          <SocialIcon>
            <i class="fa-brands fa-github"></i>
          </SocialIcon>
          <SocialIcon>
            <i class="fa-brands fa-linkedin"></i>
          </SocialIcon>
          <SocialIcon>
            <i class="fa-brands fa-discord"></i>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>HOME</ListItem>
            <ListItem>CART</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>CONTACT</Title>
        <ContactItem><i class="fa-solid fa-location-dot me-2"></i> Vasai, Palghar, Maharashtra</ContactItem>
        <ContactItem><i class="fa-solid fa-phone me-2"></i> +91 98340 16627</ContactItem>
        <ContactItem><i class="fa-regular fa-envelope me-2"></i> ayush.up105@gmail.com</ContactItem>
        <Payment />
      </Right>
    </Container>
  );
};

export default Footer;
