import React from 'react';
import styled from 'styled-components';
import SellerList from '../components/SellerList';
import SellerListItem from '../components/SellerListItem';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
        props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

function Seller() {

    const [authId, setAuthId] = useState();
    const id = JSON.parse(localStorage.getItem("user")).authToken;
    const getUser = async () => {
        try {
            if (localStorage.getItem("user")) {
                const id = JSON.parse(localStorage.getItem("user")).authToken;
                const getUserData = await fetch(
                    "https://shopnest-backend.onrender.com/api/auth/getUser",
                    {
                        method: "get",
                        headers: {
                            "auth-token": `${id}`,
                        },
                    }
                );
                const data = await getUserData.json();
                setAuthId(data._id);
            } else {
                console.log("user not found");
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred while logging in.");
        }
    };

    useEffect(() => {
        getUser();
        setAuthId("your_user_id")

    }, []);

    console.log(authId)


    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:5000/api/products/find-by-user/your_user_id`
                );
                setProducts(res.data);
            } catch (err) { }
        };
        getProducts();
    }, [id]);
    return (
        <>
            <form action="/add-new-product">
                <Top>
                    <TopButton type="filled">Add New Product</TopButton>
                </Top>
            </form>

            <SellerList>
                {products.map((p) => {
                    return <SellerListItem p_id={p._id} p_desc={p.product_description} p_name={p.product_name} p_price={p.price} p_image={p.product_image} />
                })}
            </SellerList>
        </>
    )
}

export default Seller