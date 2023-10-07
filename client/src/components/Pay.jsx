import StripeCheckout from 'react-stripe-checkout';
import React from 'react';
import axios from 'axios';

export default function Pay({ apiKey, price, server, label = "Pay Now", name = "Pay With Credit Card" }) {

    const payNow = async token => {
      try {
        const response = await axios({
          url: server,
          method: 'post'
        });
      } catch (error) {
        console.log("Error");
      }
    };
  
    return (
      <div className="container">
        <StripeCheckout
          stripeKey={apiKey}
          label={label}
          name={name}
          billingAddress
          shippingAddress
          amount={price}
          description={`Your total is $${price}`}
          token={payNow}
        />
      </div>
    );
  }
  