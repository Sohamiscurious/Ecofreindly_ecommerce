import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

function SellerList({ children }) {
    return (
        <div>
            <Title>
                Your Products
            </Title>
            <div>
                {children}
            </div>
        </div>
    )
}

export default SellerList